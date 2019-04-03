const TagToUser = require('../models').tag_to_user;
const TagToProject = require('../models').tag_to_project;
const Tags = require('../models').tags;
const users = require('../models').users;
const Projects = require('../models').projects;
const Users = require('../models').users;
const Associations = require('../models').user_associations;
const Sequelize = require('sequelize');
const Correlation = require('correlation-rank');
const Similarity = require( 'compute-cosine-similarity' );
const Distance = require('euclidean-distance')

const Op = Sequelize.Op;

function get_project_list_by_tags(tags, res){
    TagToProject.sequelize.query('SELECT project_id, count(tag_id) as tag_count FROM tag_to_projects WHERE tag_id IN(:status) GROUP BY project_id ORDER BY tag_count DESC',
      { replacements: { status: tags }, type: TagToProject.sequelize.QueryTypes.SELECT }
    ).then(final => {
        res.status(200).send(final);
    }).catch((error) => res.status(400).send(error));
}

function get_user_list_by_tags(tags, res){
    TagToUser.sequelize.query('SELECT user_id, count(tag_id) as tag_count FROM tag_to_users WHERE tag_id IN(:status) GROUP BY user_id ORDER BY tag_count DESC' ,
      { replacements: { status: tags }, type: TagToUser.sequelize.QueryTypes.SELECT }
    ).then(final => {
        res.status(200).send(final);
    }).catch((error) => res.status(400).send(error));
}

function get_tags_count_project_list(porjects, res){
    TagToProject.sequelize.query('SELECT tag_id, count(project_id) as tag_count FROM tag_to_projects WHERE project_id IN(:status) GROUP BY tag_id ORDER BY tag_count DESC',
      { replacements: { status: porjects }, type: TagToProject.sequelize.QueryTypes.SELECT }
    ).then(final => {
        res.status(200).send(final);
    }).catch((error) => res.status(400).send(error));
}

async function feature_matrix(cur_user_id, res) {
    let feature_matrix_users = [];
    let feature_matrix_projects = [];
    let tags_count = []
    let num_users =0;
    let num_tags =0;
    let num_projects =0;
    let my_projects = [];
    try {
        await Users.count(

        ).then(c => {
            num_users = c;

        }).catch((error) => console.log(error));

        await Tags.count(

        ).then(c => {
            num_tags = c;
        }).catch((error) => console.log(error));
        await Projects.count(

        ).then(c => {
            num_projects = c;
        }).catch((error) => console.log(error));

        let associations = await Associations
          .findAll({
            where: {
              user_id: cur_user_id+1,
            },
            order: [
              ['createdAt', 'DESC'],
            ],
            attributes: {exclude: ['createdAt', 'updatedAt', 'user_id'] },
            raw: true
          })

          for ( let i in associations){
              my_projects.push(associations[i].project_id)
          }
    } catch (err) {
      // Rollback transaction if any errors were encountered
      res.status(400).send(err);
    }

    for(let i =0; i<num_tags;i++){
        tags_count.push(0);
    }
    for(let j =0; j<num_users; j++){
        let temp = [...tags_count];
        let c = await users_feature_vector(j+1,temp);
        feature_matrix_users.push(c)
    }
    for(let j =0; j<num_projects; j++){
        let temp = [...tags_count];
        let c = await porject_feature_vector(j+1,temp);
        feature_matrix_projects.push(c)
    }
    sim_structs = [];
    for(let j =0; j<num_users; j++){
        if(j != cur_user_id){
            sim_structs.push({user_id: j+1,distance:Distance(feature_matrix_users[cur_user_id], feature_matrix_users[j]), pcor:Correlation.rank(feature_matrix_users[cur_user_id], feature_matrix_users[j])});
        }
    }
    sim_structs.sort((a, b) => a.distance - b.distance);
    //project sim
    let sim_projects =[];

    for(let j =0; j<num_projects; j++){
        if(!(my_projects.includes(j+1))){
            sim_projects.push({porject_id: j+1,distance:Distance(feature_matrix_users[cur_user_id], feature_matrix_projects[j]), pcor:Correlation.rank(feature_matrix_users[cur_user_id], feature_matrix_projects[j])});
        }
    }
    sim_projects.sort((a, b) =>  b.pcor - a.pcor);

    return_list = []
    for(let i =0; i<3;i++){
        return_list.push(sim_projects[i])
    }

    res.status(200).send(return_list);


}

async function users_feature_vector(user_id, tags_count){
    let projects = [];
    try {
        let associations = await Associations
          .findAll({
            where: {
              user_id: user_id,
            },
            order: [
              ['createdAt', 'DESC'],
            ],
            attributes: {exclude: ['createdAt', 'updatedAt', 'user_id'] },
            raw: true
          })

          for ( let i in associations){
              projects.push(associations[i].project_id)
          }

         let final =  await TagToProject.sequelize.query('SELECT tag_id, count(project_id) as tag_count FROM tag_to_projects WHERE project_id IN(:status) GROUP BY tag_id ORDER BY tag_count DESC',
            { replacements: { status: projects }, type: TagToProject.sequelize.QueryTypes.SELECT }
          )
          for ( let i in final){
              tags_count[final[i].tag_id -1] = parseInt(final[i].tag_count);
          }

          let my_tags = await TagToUser.findAll({
              where: { user_id: user_id },
              attributes: { exclude: ['createdAt', 'updatedAt', 'user_id', 'id'] },
              raw: true
          })
          let count_projects = projects.length;
          for ( let i in my_tags){
             tags_count[my_tags[i].tag_id -1] += count_projects;
          }
     }  catch (err) {
       // Rollback transaction if any errors were encountered
       console.log(err)
     }
     return tags_count;
}

async function porject_feature_vector(project_id, tags_count){
    let users = [];
    try {
        let associations = await Associations
          .findAll({
            where: {
              project_id: project_id,
            },
            order: [
              ['createdAt', 'DESC'],
            ],
            attributes: {exclude: ['createdAt', 'updatedAt', 'project_id'] },
            raw: true
          })

          for ( let i in associations){
              users.push(associations[i].user_id)
          }

         let final =  await TagToUser.sequelize.query('SELECT tag_id, count(user_id) as tag_count FROM tag_to_users WHERE user_id IN(:status) GROUP BY tag_id ORDER BY tag_count DESC',
            { replacements: { status: users }, type: TagToProject.sequelize.QueryTypes.SELECT }
          )
          for ( let i in final){
              tags_count[final[i].tag_id -1] = parseInt(final[i].tag_count);
          }

          let my_tags = await TagToProject.findAll({
              where: { project_id: project_id },
              attributes: { exclude: ['createdAt', 'updatedAt', 'project_id', 'id'] },
              raw: true
          })
          let count_users = users.length;
          for ( let i in my_tags){
             tags_count[my_tags[i].tag_id -1] += count_users;
          }
     }  catch (err) {
       // Rollback transaction if any errors were encountered
       console.log(err)
     }
     return tags_count;
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
                let result = [];
                for ( let tag_id in tag){
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
                let result = [];
                for ( let tag_id in tag){
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
            let result = [];
            for ( let i in associations){
                result.push(associations[i].project_id)
            }
            get_tags_count_project_list(result, res);
        })
        .catch((error) => res.status(400).send(error));
    },

    recommend_to_user(req, res) {
        try{
            feature_matrix(req.params.user_id -1, res);
        } catch (err){
            res.status(400).send(err);
        }


    },

};
