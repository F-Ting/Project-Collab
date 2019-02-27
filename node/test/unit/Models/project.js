//borrowed from https://github.com/jordanell/testing-with-sequelize/tree/master/src
import { assert } from 'chai';

import models from '../../../server/models';

import factories from '../../factories';
import truncate from '../../truncate';
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Project model', () => {
    let project;

    beforeEach(async () => {
        await truncate("projects");

        project = await factories.project();
    });

    it('should generate a project from the factory', async () => {
        assert.isOk(project.id);
    });

    it('should truncate the project table with each test', async () => {
        const count = await models.projects.count();

        assert.equal(count, 1);
    });
});