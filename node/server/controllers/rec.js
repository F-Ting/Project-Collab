const TagToUser = require('../models').tag_to_user;
const TagToProject = require('../models').tag_to_project;
const Tags = require('../models').tags;
const users = require('../models').users;
const Projects = require('../models').projects;
const Users = require('../models').users;
const Associations = require('../models').user_associations;
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

function get_project_list_by_tags(tags, res){
    TagToProject.sequelize.query('SELECT project_id, count(tag_id) as tag_count FROM tag_to_projects WHERE tag_id IN(:status) GROUP BY project_id ORDER BY tag_count DESC',
      { replacements: { status: tags }, type: TagToProject.sequelize.QueryTypes.SELECT }
    ).then(final => {
        console.log(final)
        res.status(200).send(final);
    }).catch((error) => res.status(400).send(error));
}

function get_user_list_by_tags(tags, res){
    TagToUser.sequelize.query('SELECT user_id, count(tag_id) as tag_count FROM tag_to_users WHERE tag_id IN(:status) GROUP BY user_id ORDER BY tag_count DESC' ,
      { replacements: { status: tags }, type: TagToUser.sequelize.QueryTypes.SELECT }
    ).then(final => {
        console.log(final)
        res.status(200).send(final);
    }).catch((error) => res.status(400).send(error));
}

function get_tags_count_project_list(porjects, res){
    TagToProject.sequelize.query('SELECT tag_id, count(project_id) as tag_count FROM tag_to_projects WHERE project_id IN(:status) GROUP BY tag_id ORDER BY tag_count DESC',
      { replacements: { status: porjects }, type: TagToProject.sequelize.QueryTypes.SELECT }
    ).then(final => {
        console.log(final)
        res.status(200).send(final);
    }).catch((error) => res.status(400).send(error));
}

module.exports = {
    // List all tags for a user
    list(req, res) {

        return TagToUser
            .findAll({
                where: { user_id: req.params.user_id },
                include: [{
                    model: Tags,
                    as: 'tag',
                    attributes: [],
                }],
                attributes: { exclude: ['createdAt', 'updatedAt', 'user_id', 'id'] },
                raw: true
            })
            .then(tag => {
                res.status(200).send(tag);
            }).catch((error) => res.status(400).send(error));
    },

    //rec
    rec_project_list(req, res) {
        return TagToUser
            .findAll({
                where: { user_id: req.params.user_id },
                attributes: { exclude: ['createdAt', 'updatedAt', 'user_id', 'id'] },
                raw: true
            })
            .then(tag => {
                var result = [];
                for ( var tag_id in tag){
                    result.push(tag[tag_id].tag_id)
                }
                get_project_list_by_tags(result, res);

            }).catch((error) => res.status(400).send(error));
    },

    simlair_users(req, res) {
        return TagToUser
            .findAll({
                where: { user_id: req.params.user_id },
                attributes: { exclude: ['createdAt', 'updatedAt', 'user_id', 'id'] },
                raw: true
            })
            .then(tag => {
                var result = [];
                for ( var tag_id in tag){
                    result.push(tag[tag_id].tag_id)
                }
                get_user_list_by_tags(result, res);

            }).catch((error) => res.status(400).send(error));
    },
    // list all projects a user is in
    count_of_tags_pre_proejct(req, res) {
      return Associations
        .findAll({
          where: {
            user_id: req.params.user_id,
          },
          order: [
            ['createdAt', 'DESC'],
          ],
          attributes: {exclude: ['createdAt', 'updatedAt', 'user_id'] },
          raw: true
        })
        .then((associations) => {
            var result = [];
            for ( var i in associations){
                result.push(associations[i].project_id)
            }
            get_tags_count_project_list(result, res);
        })
        .catch((error) => res.status(400).send(error));
    },


};
