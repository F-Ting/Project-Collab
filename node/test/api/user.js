import { assert } from 'chai';

import app from '../../app' // express
import models, { sequelize } from '../../server/models';

import factories from '../factories';
import truncate from '../truncate';
const chai = require('chai')
  , chaiHttp = require('chai-http');
let expect = chai.expect
chai.use(chaiHttp);

describe('User API', () => {

  beforeEach(async () => {
    //resets the users table, no params are provided, then resets all tables
    await truncate("users");
  });

  it('Should return same number of users from /api/users and model count', async () => {
    let user = await factories.user();
    const count = await models.users.count();
    //makes API request to our app
    const response = await chai.request(app).get('/api/users')
    assert.equal(count, response.body.length);
  });

  it('Should return the same user', async () => {
    let user = await factories.user();
    const response = await chai.request(app).get('/api/users/' + user.username)
    assert.equal(user.username, response.body.username);
    assert.equal(user.id, response.body.id);
    assert.equal(user.name, response.body.name);
    assert.equal(user.email, response.body.email);
  });
});