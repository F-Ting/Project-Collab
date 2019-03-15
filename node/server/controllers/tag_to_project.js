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
    return Tags
      .findOrCreate({
        where: { tag: req.body.tag },
        defaults: { tag: req.body.tag },
      })
      .then(([tag, created]) => {
        if (!tag) {
          return res.status(500).send({
            message: 'Error Creating Tag ',
          });
        }
        return TagToProject
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
          .then(([tag, created]) => res.status(200).send(tag))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  // Delete a tag from a project
  delete(req, res) {
    console.log("id", req.body.id)
    return TagToProject
      .find({
        where: { "tag_id": req.body.id }
      })
      .then(tag => {
        console.log(tag)
        return tag.destroy()
          .then(() => res.status(200).send({ message: "tag deleted from project" }))
          .catch((error) => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
