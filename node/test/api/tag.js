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

});