const Projects = require('../models').projects;
const Users = require('../models').users;
const TagToProject = require('../models').tag_to_project;
const Tags = require('../models').tags;
const Associations = require('../models').user_associations;
const axios = require('axios');

module.exports = {
  // Create a new Project
  create(req, res) {
    return Projects
      .create({
        name: req.body.name,
        description: req.body.description,
        github: req.body.github,
        url: req.body.url,
        image: req.body.image,
        status: 'unapproved'
      })
      .then(project => {
        if (!project) {
          return res.status(500).send({
            message: 'Error Creating Project ',
          });
        }
        return Associations.create({
          user_id: req.body.user_id,
          project_id: project.id,
          is_admin: true,
          status: 'approved'
        })
        .then((association) => res.status(200).send(project))
        .catch((error) => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  // list all projects
  list(req, res) {
    return axios.get("http://localhost:8001" + req.originalUrl)
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      console.log(error)
      res.status(400).send(error);
    });
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
  },

  // list all projects
  listSearch(req, res) {
    return axios
      .post("http://localhost:8001/api/projects/search", {
        searchByProject: req.body.searchByProject
      })
      .then(response => {
        res.status(200).send(response.data);
      })
      .catch(error => {
        res.status(400).send(error);
      });
  },

  // get a single project
  getProject(req, res) {
    if(req.query.withTags){
      getProjectWithTags(req,res)
    } else {
      getProjectWithoutTags(req,res)
    }
  },

  // remove a project
  removeProject(req, res) {
    return Projects
      .findById(
        req.body.id
      )
      .then(project => {
        return project.destroy()
          .then(() => res.status(200).send({message: "project deleted"}))
          .catch((error) => res.status(400).send(error));
        })
      .catch(error => res.status(400).send(error));
  },

  //update a project
  update(req, res) {
    return Projects
      .findById( req.params.project, {
        attributes: {exclude: ['createdAt', 'updatedAt'] }
      })
      .then(project => {
        if (!project) {
          return res.status(404).send({
            message: 'Project Not Found',
          });
        }
        return project
          .update({
            name: req.body.name,
            description: req.body.description,
            github: req.body.github,
            url: req.body.url,
            status: req.body.status
          })
          .then((project) => res.status(200).send(project))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  // approve a project
  updateStatus(req, res) {
    return Projects
      .findById( req.params.project, {
        attributes: {exclude: ['createdAt', 'updatedAt'] }
      })
      .then(project => {
        if (!project) {
          return res.status(404).send({
            message: 'Project Not Found',
          });
        }
        return project
          .update({
            status: req.params.status,
          })
          .then((project) => res.status(200).send(project))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },


};

function getProjectWithTags(req,res){
  Projects
  .findById(req.params.project,{
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
  .then(project => {
    // turn into own method
    let resObj = mapProjects(project);
    res.status(200).send(resObj);
  })
  .catch(error => res.status(400).send(error));
}
function getProjectWithoutTags(req,res){
  Projects
  .findById( req.params.project, {
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
  .then(project => {
    let resObj = mapProjects(project);
    res.status(200).send(resObj);
  })
  .catch(error => res.status(400).send(error));
}

const mapProjects = function(project) {
    return Object.assign(
      {},
      {
        id: project.id,
        name: project.name,
        description: project.description,
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
        tags: project.tag_to_project ? project.tag_to_project.map(el => el.tag.tag) : []
      }
    );
};