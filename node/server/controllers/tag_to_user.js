const TagToUser = require('../models').tag_to_user;
const TagToProject = require('../models').tag_to_project;
const Tags = require('../models').tags;
const users = require('../models').users;
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

function moreRec(result, res){
    console.log("here")
    TagToProject.sequelize.query('SELECT project_id, count(tag_id) as tag_count FROM tag_to_projects WHERE tag_id IN(:status) GROUP BY project_id ORDER BY tag_count DESC',
      { replacements: { status: result }, type: TagToProject.sequelize.QueryTypes.SELECT }
    ).then(final => {
        console.log(final)
        res.status(200).send(final);
    }).catch((error) => res.status(400).send(error));
}

module.exports = {
    // List all tags for a user
    list(req, res) {
        return Tags
            .findAll({
                where: { "$tag_to_user.user_id$": req.params.user_id },
                include: [{
                    model: TagToUser,
                    as: 'tag_to_user',
                    attributes: [],
                }],
                attributes: { exclude: ['createdAt', 'updatedAt'] },
            })
            .then(tag => {
                res.status(200).send(tag)
            })
            .catch((error) => res.status(400).send(error));
    },

    //rec
    rec(req, res) {
        return TagToUser
            .findAll({
                where: { user_id: req.params.user_id },
                attributes: { exclude: ['createdAt', 'updatedAt', 'user_id', 'id'] },
                raw: true
            })
            .then(tag => {
                var result = [];
                console.log(tag)
                for ( var tag_id in tag){
                    result.push(tag[tag_id].tag_id)
                }
                moreRec(result, res);



            }).catch((error) => res.status(400).send(error));
    },

    getUserList(req,res){
        let tagList = req.query.tags.split(',')
        return users
            .findAll({
                include: [{
                    model: TagToUser,
                    as: 'tag_to_user',
                    include: [{
                        model: Tags,
                        where: {tag : { $in: tagList }}
                    }],
                    required: true
                }],
                attributes: { exclude: ['createdAt', 'updatedAt'] },
            })
            .then(users => {
                const resObj = users.map(user => {
                    return Object.assign({},
                        {
                            'id': user.id,
                            'username': user.username,
                            'name':user.name,
                            'bio':user.bio,
                            'type':user.type
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
        const result = [];
        return Promise.all(
            // filter unique strings in the request to avoid duplicate db queries
            tags
                .filter((e, i) => tags.indexOf(e) === i)
                .map(tag => {
                    return Tags
                        .findOrCreate({
                            where: { tag },
                            defaults: { tag },
                        })
                        .then(([tag, created]) => {
                            return TagToUser
                                .findOrCreate({
                                    where: {
                                        tag_id: tag.id,
                                        user_id: req.params.user_id
                                    },
                                    defaults: {
                                        tag_id: tag.id,
                                        user_id: req.params.user_id
                                    }
                                })
                                .then(() => result.push(tag))
                        })
                        .catch((error) => error(error));
                }))
            .then(() => {
                res.status(200).send(result)
                return Promise.resolve(result);
            })
            .catch(error =>
                res.status(400).send(error)
            )
    },

    // Delete a tag from a user
    delete(req, res) {
        return Tags
            .findAll({
                where: { tag: { [Op.in]: req.body.tags } }
            })
            .then(tags => {
                return TagToUser
                    .destroy({
                        where: {
                            user_id: req.params.user_id,
                            tag_id: { [Op.in]: tags.map(tag => tag.id) }
                        }
                    })
                    .then(() => res.status(200).send({ message: "tag deleted from user" }))
                    .catch((error) => error(error));
            })
            .catch((error) => res.status(400).send(error));
    }
};
