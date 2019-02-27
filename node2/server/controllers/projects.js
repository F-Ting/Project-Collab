const Users = require('../models').users;
const Projects = require('../models').projects;
const Associations = require('../models').user_associations;

module.exports = {

  // list all projects
  list(req, res) {
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
      .then((projects) => {

        const resObj = projects.map(project => {
          return Object.assign({},
            {
                "id": project.id,
                "name": project.name,
                "description": project.description,
                "github": project.github,
                "url": project.url,
                "project_start_date": project.project_start_date,
                "image": project.image,
                "status": project.status,
                "createdAt": project.createdAt,
                "updatedAt": project.updatedAt,
                "owner": {
                  "name": project.user_associations[0].user.name,
                  "username": project.user_associations[0].user.username
                }
            }
          )
        })
        res.status(200).send(resObj)
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
