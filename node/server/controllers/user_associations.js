const Projects = require('../models').projects;
const Users = require('../models').users;
const Associations = require('../models').user_associations;
const Sequelize = require('sequelize');

const Op = Sequelize.Op;


module.exports = {
  //create a new association aka add a person to a group
  create(req, res) {
    return Associations
      .create({
        user_id: req.body.user_id,
        project_id: req.body.project_id,
        is_admin: req.body.is_admin,
        status: req.body.status,
      })
      .then(association => res.status(200).send(association))
      .catch((error) => res.status(400).send(error));
  },

  // list all users in a project
  listUsers(req, res) {
    return Associations
      .findAll({
        where: {
          project_id: req.params.project,
        },
        order: [
          ['createdAt', 'DESC'],
        ],
        include: [{
          model: Users,
          as: 'user',
          attributes: {exclude: ['password', 'createdAt', 'updatedAt'] },
        }],
        attributes: {exclude: ['createdAt', 'updatedAt', 'project_id'] }
      })
      .then((associations) => res.status(200).send(associations))
      .catch((error) => res.status(400).send(error));
  },

  // list all projects a user is in
  listProjects(req, res) {
    return Projects
      .findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
        include: [{
          model: Associations,
          as: 'user_associations',
          required: true,
          include:[{
            model: Users,
            where: {
              username: req.params.username
            },
            required: true,
          }]
        }],
        attributes: {exclude: ['createdAt', 'updatedAt', 'user_id'] }
      })
      .then((projects) => {
        let resObj = mapProjects(projects)
        res.status(200).send(resObj)
      })
      .catch((error) => res.status(400).send(error));
  },

  // get your status on a project
  yourProjectStatus(req, res) {
    return Associations
      .findAll({
        where: {
          user_id: req.body.user,
          project_id: req.params.project
        },
        order: [
          ['createdAt', 'DESC'],
        ],
        include: [{
          model: Projects,
          as: 'project',
          attributes: {exclude: ['password', 'createdAt', 'updatedAt'] },
        }],
        attributes: {exclude: ['createdAt', 'updatedAt', 'user_id'] }
      })
      .then((associations) => res.status(200).send(associations))
      .catch((error) => res.status(400).send(error));
  },

  listNotInProjects(req, res) {
    return Associations
      .findAll({
        where: {
          user_id: req.body.user,
        },
        order: [
          ['createdAt', 'DESC'],
        ],
        attributes: {exclude: ['createdAt', 'updatedAt', 'user_id'] }
      })
      .then((associations) => {
        let my_projects = []
        for(association of associations){
           my_projects.push(association.project_id);
        }
        return Projects.findAll({
          where: {
            id: {
              [Op.notIn]: my_projects
            },
            status: 'approved'
          }
        })
        .then((project) => res.status(200).send(project))
        .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  updateStatus(req, res) {
    return Associations
      .findOne({
        where: {
          user_id: req.body.admin_id,
          project_id: req.body.project_id,
        },
      })
      .then(association => {
        if (!association) {
          return res.status(404).send({
            message: 'Associations Not Found',
          });
        }
        if (association.is_admin) {
          return Associations
          .findOne({
            where: {
              user_id: req.body.user_id,
              project_id: req.body.project_id,
            },
          })
          .then(association2 => {
            return association2
            .update({
              status: req.params.status
            })
          })
          .then((association_edit) => res.status(200).send(association_edit))
          .catch((error) => res.status(400).send(error));
        }
      }).catch((error) => res.status(400).send(error));
  },

  instructorUpdateStatus(req, res) {
    return Users
      .findById(req.body.instructor_id, {
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        },
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((users) => {
        if (!users) {
          return res.status(404).send({
            message: 'Associations Not Found',
          });
        }
        if(users.type != 'instructor'){
          return res.status(400).send({message: "you don't have permissions for this command"});
        }
        return Associations
        .findOne({
          where: {
            user_id: req.body.user_id,
            project_id: req.body.project_id,
          },
        })
        .then(association2 => {
          return association2
          .update({
            status: req.params.status
          })
        })
        .then((association_edit) => res.status(200).send(association_edit))
        .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  // list all users in a project
  listSpecificUsers(req, res) {
    return Associations
      .findAll({
        where: {
          project_id: req.params.project,
          status: req.params.status,
        },
        order: [
          ['createdAt', 'DESC'],
        ],
        include: [{
          model: Users,
          as: 'user',
          attributes: {exclude: ['password', 'createdAt', 'updatedAt'] },
        }],
        attributes: {exclude: ['createdAt', 'updatedAt', 'project_id'] }
      })
      .then((associations) => res.status(200).send(associations))
      .catch((error) => res.status(400).send(error));
  },


};

const mapProjects = function(projects) {
  return projects.map(project => {
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
  });
};