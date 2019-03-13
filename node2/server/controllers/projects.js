const Users = require("../models").users;
const Projects = require("../models").projects;
const Associations = require("../models").user_associations;
const Op = require("../models").Sequelize.Op;

const log = console.log;
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
        }
      }
    );
  });
};

module.exports = {
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
        }
      ]
    })
      .then(projects => {
        // turn into own method
        resObj = mapProjects(projects);
        res.status(200).send(resObj);
      })
      .catch(error => res.status(400).send(error));
  },

  // list all projects by searching project names
  listSearch(req, res) {
    return Projects.findAll({
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
        }
      ],
      where: {
        name: {
          [Op.or]: req.body.searchByProject
        }
      }
    })
      .then(projects => {
        resObj = mapProjects(projects);
        log(resObj);
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
      .catch(error => {
        log(error);
        res.status(400).send(error);
      });
  }
};
