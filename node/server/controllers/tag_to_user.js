const TagToUser = require('../models').tag_to_user;
const TagToProject = require('../models').tag_to_project;
const Tags = require('../models').tags;
const users = require('../models').users;
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

module.exports = {
    // List all tags for a user
    list(req, res) {
        return TagToUser
            .findAll({
                include: [{
                    model: TagToUser,
                    as: 'tag_to_user',
                    include: [{
                        model: users,
                        where: { username: req.params.username },
                    }],
                    required:true
                }],
                attributes: { exclude: ['createdAt', 'updatedAt', 'user_id', 'id'] },
                raw: true
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


    // Associate a tag with a user, creating the tag if it doesn't already exist
    async create(req, res) {
        let tagList = req.body.tags;
        try {
            let user = await users.findOne({where: {username : req.params.username}})
            let user_id = user.id
            let uniqueTagList = tagList
            .filter((e, i) => tagList.indexOf(e) === i)
            //create tags
            for(let tag in uniqueTagList){
                let tagInfo = await Tags
                    .findOrCreate({
                        where: { tag },
                        defaults: { tag },
                    })

                await TagToUser
                .findOrCreate({
                    where: {
                        tag_id: tagInfo[0].id,
                        user_id: user_id
                    },
                    defaults: {
                        tag_id: tagInfo[0].id,
                        user_id: user_id
                    }
                })
            }

            res.status(200).send()
        } catch(error) {
            console.log(error)
            res.status(400).send(error)
        }
    },

    // Delete a tag from a user
    async delete(req, res) {
        try {
            //get user
            let user = await users.findOne({where: {username : req.params.username}})
            let user_id = user.id
            let tagList = await Tags
            .findAll({
                where: { tag: { [Op.in]: req.body.tags } }
            })
            await TagToUser
                .destroy({
                    where: {
                        user_id: user_id,
                        tag_id: { [Op.in]: tagList.map(tag => tag.id) }
                    }
                })
                .then(() => res.status(200).send({ message: "tag deleted from user" }))

        }catch(error){
            res.status(400).send()
        }
    }
};
