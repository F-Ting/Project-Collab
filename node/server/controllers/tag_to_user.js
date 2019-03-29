const TagTouser = require('../models').tag_to_user;
const Tags = require('../models').tags;
const users = require('../models').users;
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

module.exports = {
    // List all tags for a user
    list(req, res) {
        return Tags
            .findAll({
                include: [{
                    model: TagTouser,
                    as: 'tag_to_user',
                    include: [{
                        model: users,
                        where: { username: req.params.username },
                    }]
                }],
                attributes: { exclude: ['createdAt', 'updatedAt'] },
            })
            .then(tag => {
                let resObj = tag.map(el => el.tag)
                res.status(200).send(resObj)
            })
            .catch((error) => res.status(400).send(error));
    },

    // get list of users that contain any of the follow tags
    getUserList(req,res){
        let tagList = req.query.tags.split(',')
        return users
            .findAll({
                include: [{
                    model: TagTouser,
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

    // Associate a tag with a user, creating the tag if it doesn't already exist
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
                            return TagTouser
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
                return TagTouser
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
