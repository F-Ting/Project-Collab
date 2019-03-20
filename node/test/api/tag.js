import { assert } from 'chai';

import app from '../../app'
import models, { sequelize } from '../../server/models';

import factories from '../factories';
import truncate from '../truncate';
const chai = require('chai')
    , chaiHttp = require('chai-http');
let expect = chai.expect
chai.use(chaiHttp);

describe('Tag API', () => {

    beforeEach(async () => {
        await truncate();
    });
    
    it('should get project with tag', async () => {
        // create 3 tags
        let tagObj1 = await factories.tag();
        let tagObj2 = await factories.tag();
        let tagObj3 = await factories.tag();

        // create 2 projects
        let project1 = await factories.project();
        let project2 = await factories.project();

        // associate projects with tags
        await models.tag_to_project.create({project_id:project1.id, tag_id: tagObj1.id});
        await models.tag_to_project.create({project_id:project1.id, tag_id: tagObj2.id});
        await models.tag_to_project.create({project_id:project2.id, tag_id: tagObj3.id});

        //make API call
        const response = await chai.request(app).get('/api/tags/projects?tags=' + tagObj1.tag)
        expect(response.body).to.have.lengthOf(1)
        assert(response.body[0],project1)
    });

    it('should get tags for a project', async () => {
        // create 3 tags
        let tagObj1 = await factories.tag();
        let tagObj2 = await factories.tag();
        let tagObj3 = await factories.tag();

        // create 1 project
        let project = await factories.project();

        // associate project with two of the tags
        await models.tag_to_project.create({ project_id: project.id, tag_id: tagObj1.id });
        await models.tag_to_project.create({ project_id: project.id, tag_id: tagObj2.id });

        //make API call
        const response = await chai.request(app).get('/api/tags/project/' + project.id);
        expect(response.body).to.have.lengthOf(2);
        assert(response.body[0], { id: tagObj1.id, tag: tagObj1.tag });
        assert(response.body[1], { id: tagObj2.id, tag: tagObj2.tag });
    });

    it('should update the tags for a project', async () => {
        // create 1 project
        let project = await factories.project();
        let data = {
            tags: ['t1', 't2']
        }

        //make API call
        const response = await chai.request(app).post('/api/tags/project/' + project.id).send(data);
        expect(response.body).to.have.lengthOf(2);
        assert(response.body[0].tag, data.tags[0]);
        assert(response.body[1].tag, data.tags[1]);
    });

    it('should delete the tags from a project', async () => {
        // create 2 tags
        let tagObj1 = await factories.tag();
        let tagObj2 = await factories.tag();

        // create 1 project
        let project = await factories.project();

        let data = {
            tags: [tagObj1.tag, tagObj2.tag]
        }

        // associate project with two of the tags
        await models.tag_to_project.create({ project_id: project.id, tag_id: tagObj1.id });
        await models.tag_to_project.create({ project_id: project.id, tag_id: tagObj2.id });

        //make API call
        const response = await chai.request(app).post('/api/tags/project/' + project.id + 'remove').send(data);
        assert(response.body, "tag deleted from project");
    });

    it('should get user with tag', async () => {
        // create 3 tags
        let tagObj1 = await factories.tag();
        let tagObj2 = await factories.tag();
        let tagObj3 = await factories.tag();

        // create 2 users
        let user1 = await factories.user();
        let user2 = await factories.user();

        // associate users with tags
        await models.tag_to_user.create({user_id:user1.id, tag_id: tagObj1.id});
        await models.tag_to_user.create({user_id:user1.id, tag_id: tagObj2.id});
        await models.tag_to_user.create({user_id:user2.id, tag_id: tagObj3.id});

        //make API call
        const response = await chai.request(app).get('/api/tags/users?tags=' + tagObj1.tag)
        expect(response.body).to.have.lengthOf(1)
        assert(response.body[0],user1)
    });

    it('should get tags for a user', async () => {
        // create 3 tags
        let tagObj1 = await factories.tag();
        let tagObj2 = await factories.tag();
        let tagObj3 = await factories.tag();

        // create 1 user
        let user = await factories.user();

        // associate user with two of the tags
        await models.tag_to_user.create({ user_id: user.id, tag_id: tagObj1.id });
        await models.tag_to_user.create({ user_id: user.id, tag_id: tagObj2.id });

        //make API call
        const response = await chai.request(app).get('/api/tags/user/' + user.id);
        expect(response.body).to.have.lengthOf(2);
        assert(response.body[0], { id: tagObj1.id, tag: tagObj1.tag });
        assert(response.body[1], { id: tagObj2.id, tag: tagObj2.tag });
    });

    it('should update the tags for a user', async () => {
        // create 1 user
        let user = await factories.user();
        let data = {
            tags: ['t1', 't2']
        }

        //make API call
        const response = await chai.request(app).post('/api/tags/user/' + user.id).send(data);
        expect(response.body).to.have.lengthOf(2);
        assert(response.body[0].tag, data.tags[0]);
        assert(response.body[1].tag, data.tags[1]);
    });

    it('should delete the tags from a user', async () => {
        // create 2 tags
        let tagObj1 = await factories.tag();
        let tagObj2 = await factories.tag();

        // create 1 user
        let user = await factories.user();

        let data = {
            tags: [tagObj1.tag, tagObj2.tag]
        }

        // associate user with two of the tags
        await models.tag_to_user.create({ user_id: user.id, tag_id: tagObj1.id });
        await models.tag_to_user.create({ user_id: user.id, tag_id: tagObj2.id });

        //make API call
        const response = await chai.request(app).post('/api/tags/user/' + user.id + 'remove').send(data);
        assert(response.body, "tag deleted from user");
    });

    it('should return 5 tags', async () => {
        // create 5 tags
        for(let i = 0; i < 5; i++){
            await factories.tag();
        }
        //make API call
        const response = await chai.request(app).get('/api/tags/recommend')
        expect(response.body).to.have.lengthOf(5)
    });

    it('should return no more than 5 tags', async () => {
        // create 7 tags
        for(let i = 0; i < 7; i++){
            await factories.tag();
        }
        //make API call
        const response = await chai.request(app).get('/api/tags/recommend')
        expect(response.body).to.have.lengthOf(5)
    });

    it('should return only 3 tags if only 3 tags exist', async () => {
        // create 3 tags
        for(let i = 0; i < 3; i++){
            await factories.tag();
        }
        //make API call
        const response = await chai.request(app).get('/api/tags/recommend')
        expect(response.body).to.have.lengthOf(3)
    });



});
