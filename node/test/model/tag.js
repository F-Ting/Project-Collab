import { assert } from 'chai';

import models, { sequelize } from '../../server/models';

import factories from '../factories';
import truncate from '../truncate';
const chai = require('chai');
let expect = chai.expect;

describe('Tag API', () => {

    beforeEach(async () => {
        await truncate("tags");
    });

    it('should generate a tag from the factory', async () => {
        //creates a tag object with default props ad described in factory
        //can pass props as project object to create specified project
        let tag = await factories.tag();
        assert.isOk(tag.tag);
    });
});