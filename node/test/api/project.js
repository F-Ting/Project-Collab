import { assert } from 'chai';

import app from '../../app'
import models, { sequelize } from '../../server/models';

import factories from '../factories';
import truncate from '../truncate';
const chai = require('chai')
    , chaiHttp = require('chai-http');
let expect = chai.expect
chai.use(chaiHttp);

describe('Project model', () => {
    let project;
    let user;

    beforeEach(async () => {
        await truncate("projects");
        user = await factories.user();
    });

    it('should generate a project from the factory', async () => {
        //creates a project object with default props ad described in factory
        //can pass props as project object to create specified project
        project = await factories.project();
        assert.isOk(project.id);
    });

    it('can post to the project endpoint to create a new project', async () => {
        const count = await models.projects.count();
        const new_project = {
            user_id: user.id,
            name: "test_name",
            description: "test_description",
            github: "test_github",
            url: "test_url"
        }

        const response = await chai.request(app).post('/api/project').send(new_project);

        expect(response).to.have.status(200);
        assert.equal(new_project.name, response.body.name);
        assert.equal(new_project.description, response.body.description);
        assert.equal(new_project.github, response.body.github);
        assert.equal(new_project.url, response.body.url);
        assert.equal(count + 1, await models.projects.count());
    });
});