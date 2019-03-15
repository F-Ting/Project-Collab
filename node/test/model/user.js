import { assert } from 'chai';

import models, { sequelize } from '../../server/models';

import factories from '../factories';
import truncate from '../truncate';
const chai = require('chai');
let expect = chai.expect;

describe('User model', () => {

  beforeEach(async () => {
    //resets the users table, no params are provided, then resets all tables
    await truncate("users");
  });
  

  it('should generate a user from the factory', async () => {
    //creates a user object with default props ad described in factory
    //can pass props as user object to create specified user
    let user = await factories.user();
    assert.isOk(user.id);
  });

});