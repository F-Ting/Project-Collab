const TagToProject = require('../models').tag_to_project;
const Tags = require('../models').tags;
const Projects = require('../models').projects;
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

module.exports = {
  // List all tags for a project
  list(req, res) {
    return Tags
      .findAll({
        where: { "$tag_to_project.project_id$": req.params.project_id },
        include: [{
          model: TagToProject,
          as: 'tag_to_project',
          attributes: [],
        }],
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      })
      .then(tag => {
        res.status(200).send(tag)
      })
      .catch((error) => res.status(400).send(error));
  },

  getProjectList(req,res){
    let tagList = req.query.tags.split(',')
    return Projects
    .findAll({
      include: [{
        model: TagToProject,
        as: 'tag_to_project',
        include: [{
          model: Tags,
          where: {tag : { $in: tagList }}
        }],
        required: true
      }],
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    })
    .then(projects => {
        const resObj = projects.map(project => {
          return Object.assign({},
            {
                "id": project.id,
                "name": project.name,
                "description": project.description,
                "github": project.github,
                "url": project.url,
                "project_start_date": project.project_start_date,
                "image": project.image
            }
          )
        })
        res.status(200).send(resObj)
    })
    .catch((error) => res.status(400).send(error));
  },

  // Associate a tag with a projet, creating the tag if it doesn't already exist
  create(req, res) {
    const tags = req.body.tags;
    return Promise.all(tags
      // filter unique strings in the request to avoid duplicate db queries
      .filter((e, i) => tags.indexOf(e) === i)
      .map(tag => {
        return Tags
          .findOrCreate({
            where: { tag },
            defaults: { tag },
          })
          .then(([tag, created]) => {
            TagToProject
              .findOrCreate({
                where: {
                  tag_id: tag.id,
                  project_id: req.params.project_id
                },
                defaults: {
                  tag_id: tag.id,
                  project_id: req.params.project_id
                }
              })
              .catch((error) => res.status(400).send(error));
            return tag;
          })
          .catch((error) => res.status(400).send(error));
      }))
      .then(tags => {
        res.status(200).send(tags);
      })
      .catch((error) => res.status(400).send(error));
  },

  // Delete a tag from a project
  delete(req, res) {
    return Tags
      .findAll({
        where: { tag: { [Op.in]: req.body.tags } }
      })
      .then(tags => {
        return TagToProject
          .destroy({
            where: {
              project_id: req.params.project_id,
              tag_id: { [Op.in]: tags.map(tag => tag.id) }
            }
          })
          .then(() => res.status(200).send({ message: "tag deleted from project" }))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};
