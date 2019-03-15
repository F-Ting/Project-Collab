import { assert } from 'chai';

import models, { sequelize } from '../../server/models';

import factories from '../factories';
import truncate from '../truncate';
const chai = require('chai');
let expect = chai.expect;

describe('Project model', () => {

    beforeEach(async () => {
        await truncate("projects");
    });

    it('should generate a project from the factory', async () => {
        //creates a project object with default props ad described in factory
        //can pass props as project object to create specified project
        let project = await factories.project();
        assert.isOk(project.id);
    });
});