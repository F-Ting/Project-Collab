const Users = require('../models').users;
const Projects = require('../models').projects;
const Associations = require('../models').user_associations;
const TagToProject = require('../models').tag_to_project;
const Tags = require('../models').tags;

const Op = require('../models').Sequelize.Op;

const log = console.log;
const mapProjects = function(projects) {
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
        tags: []
      }
    );
  });
};

module.exports = {

  // list all projects
  list(req, res) {
    if(req.query.withTags){
      getProjectsWithTags(req,res)
    } else {
      getProjectsWithoutTags(req,res)
    }
 
  },

  // list all projects by searching project names
  listSearch(req, res) {
    let hasTagFilter = req.body.searchByTags.length > 0 
    let hasProjectFilter = req.body.searchByProjects.length > 0 
    let projectFilter = hasProjectFilter ? {
      name: {
        [Op.in]: req.body.searchByProjects
      }
    } : {}
    let tagFilter = hasTagFilter ? {
      tag : {
        [Op.in]: req.body.searchByTags
      }
    }: {}
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
          as: 'tag_to_project',
          required: hasTagFilter ? true : false,
          include:[
            {
              model: Tags,
              where: tagFilter
            },
        ]
        }
      ],
      where: projectFilter
    })
      .then(projects => {
        let resObj = mapProjects(projects);
        res.status(200).send(resObj);
      })
      .catch((error) => res.status(400).send(error));
  },

  // list all projects that are approved or that are unapproved
  listApprovedOrUnapproved(req, res) {
    return Projects
      .findAll({
        attributes: {exclude: ['createdAt', 'updatedAt'] },
        where: {
          status: req.params.status
        }
      })
      .then((projects) => res.status(200).send(projects))
      .catch((error) => res.status(400).send(error));
  }
};

function getProjectsWithTags(req,res){
  Projects
  .findAll({
    order: [
      ['createdAt', 'DESC'],
    ],
    include: [{
      model: Associations,
      as: 'user_associations',
      where: {
        is_admin: true
      },
      include:[{
        model: Users,
      }]
    },
    {
      model: TagToProject,
      as: 'tag_to_project',
      include:[{
        model: Tags
      }]
    }]
})
  .then(projects => {
    // turn into own method
    let resObj = mapProjects(projects);
    res.status(200).send(resObj);
  })
  .catch(error => res.status(400).send(error));
}

function getProjectsWithoutTags(req,res){
  Projects
  .findAll({
    order: [
      ['createdAt', 'DESC'],
    ],
    include: [{
      model: Associations,
      as: 'user_associations',
      where: {
        is_admin: true
      },
      include:[{
        model: Users,
      }]
    }]
})
  .then(projects => {
    // turn into own method
    let resObj = mapProjects(projects);
    res.status(200).send(resObj);
  })
  .catch(error => res.status(400).send(error));
}