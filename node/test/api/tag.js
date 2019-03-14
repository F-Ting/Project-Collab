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
        await truncate("tags");
    });

    it('should generate a tag from the factory', async () => {
        //creates a project object with default props ad described in factory
        //can pass props as project object to create specified project
        tag = await factories.project();
        assert.isOk(tag.tag);
    });

});