const Projects = require("../models").projects;
const Users = require("../models").users;
const TagToProject = require("../models").tag_to_project;
const Tags = require("../models").tags;
const Associations = require("../models").user_associations;
const path = require("path");
const fs = require("fs");
const AWS = require("aws-sdk")
module.exports = {
    // Create a new Project
    async create(req, res) {
        let imageURL = null;
        if (req.body.image) {
            imageURL = await uploadToS3(req.body.name,req.body.image);
        }

        return Projects.create({
            name: req.body.name,
            description: req.body.description,
            tasks_required: req.body.tasks_required,
            github: req.body.github,
            url: req.body.url,
            image: imageURL,
            status: "unapproved"
        })
            .then(project => {
                if (!project) {
                    return res.status(500).send({
                        message: "Error Creating Project "
                    });
                }
                return Associations.create({
                    user_id: req.body.user_id,
                    project_id: project.id,
                    is_admin: true,
                    status: "approved"
                })
                    .then(association => res.status(200).send(project))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    // list all projects
    list(req, res) {
        Projects.findAll({
            order: [["createdAt", "DESC"]],
            include: [
                {
                    model: Associations,
                    as: "user_associations",
                    where: {
                        is_admin: true
                    },
                    include: [
                        {
                            model: Users
                        }
                    ]
                },
                {
                    model: TagToProject,
                    as: "tag_to_project",
                    include: [
                        {
                            model: Tags
                        }
                    ]
                }
            ]
        })
            .then(projects => {
                // turn into own method
                let resObj = mapProjects(projects, req.query.withTags);
                res.status(200).send(resObj);
            })
            .catch(error => res.status(400).send(error));
    },
    // list all projects that are approved or that are unapproved
    listApprovedOrUnapproved(req, res) {
        return Projects.findAll({
            attributes: { exclude: ["createdAt", "updatedAt"] },
            where: {
                status: req.params.status
            }
        })
            .then(projects => res.status(200).send(projects))
            .catch(error => res.status(400).send(error));
    },

    // list all projects by searching project names
    listSearch(req, res) {
        let hasTagFilter = req.body.searchByTags.length > 0;
        let hasProjectFilter = req.body.searchByProjects.length > 0;
        let projectFilter = hasProjectFilter
            ? {
                  name: {
                      [Op.in]: req.body.searchByProjects
                  }
              }
            : {};
        let tagFilter = hasTagFilter
            ? {
                  tag: {
                      [Op.in]: req.body.searchByTags
                  }
              }
            : {};
        return Projects.findAll({
            order: [["createdAt", "DESC"]],
            include: [
                {
                    model: Associations,
                    as: "user_associations",
                    include: [
                        {
                            model: Users
                        }
                    ]
                },
                {
                    model: TagToProject,
                    as: "tag_to_project",
                    required: hasTagFilter ? true : false,
                    include: [
                        {
                            model: Tags,
                            where: tagFilter
                        }
                    ]
                }
            ],
            where: projectFilter
        })
            .then(projects => {
                let resObj = mapProjects(projects);
                res.status(200).send(resObj);
            })
            .catch(error => res.status(400).send(error));
    },

    // get a single project
    getProject(req, res) {
      Projects.findById(req.params.project, {
        order: [["createdAt", "DESC"]],
        include: [
            {
                model: Associations,
                as: "user_associations",
                where: {
                    is_admin: true
                },
                include: [
                    {
                        model: Users
                    }
                ]
            },
            {
                model: TagToProject,
                as: "tag_to_project",
                include: [
                    {
                        model: Tags
                    }
                ]
            }
        ]
    })
        .then(project => {
            // to match the map function
            let projects = [project.dataValues];
            let resObj = mapProjects(projects, req.query.withTags)[0];
            res.status(200).send(resObj);
        })
        .catch(error => res.status(400).send(error));
    },

    // remove a project
    removeProject(req, res) {
        return Projects.findById(req.body.id)
            .then(project => {
                return project
                    .destroy()
                    .then(() =>
                        res.status(200).send({ message: "project deleted" })
                    )
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    //update a project
    async update(req, res) {
        let imageURL = null;
        if (req.body.image) {
            imageURL = await uploadToS3(req.body.name,req.body.image);
        }
        return Projects.findById(req.params.project, {
            attributes: { exclude: ["createdAt", "updatedAt"] }
        })
            .then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: "Project Not Found"
                    });
                }
                return project
                    .update({
                        name: req.body.name,
                        description: req.body.description,
                        tasks_required: req.body.tasks_required,
                        github: req.body.github,
                        url: req.body.url,
                        status: req.body.status,
                        image: imageURL
                    })
                    .then(project => res.status(200).send(project))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    // approve a project
    updateStatus(req, res) {
        return Projects.findById(req.params.project, {
            attributes: { exclude: ["createdAt", "updatedAt"] }
        })
            .then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: "Project Not Found"
                    });
                }
                return project
                    .update({
                        status: req.params.status
                    })
                    .then(project => res.status(200).send(project))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};

const mapProjects = function(projects, withTags) {
    return projects.map(project => {
        return Object.assign(
            {},
            {
                id: project.id,
                name: project.name,
                description: project.description,
                tasks_required: project.tasks_required,
                github: project.github,
                url: project.url,
                project_start_date: project.project_start_date,
                image: project.image,
                status: project.status,
                createdAt: project.createdAt,
                updatedAt: project.updatedAt,
                owner: {
                    name: project.user_associations[0].user.name,
                    username: project.user_associations[0].user.username
                },
                tags:
                    project.tag_to_project && withTags
                        ? project.tag_to_project.map(el => el.tag.tag)
                        : []
            }
        );
    });
};

function ensureDirectoryExistence(filePath) {
    let dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}


async function uploadToS3(file_name,file_data) {
    let s3bucket = new AWS.S3({
      accessKeyId: process.env.IAM_KEY,
      secretAccessKey: process.env.IAM_SECRET,
      Bucket: process.env.BUCKET_NAME
    });
    let buf = new Buffer(file_data.replace(/^data:image\/\w+;base64,/, ""),'base64')
    let params = {
        Bucket: process.env.BUCKET_NAME,
        Key: file_name,
        Body: buf
    };
    try {
        await s3bucket.upload(params);
    }catch(error){
        if (error) {
            console.log('error in callback');
            console.log(err);
        }
    }
    let url = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${file_name}`
    return url;
  }