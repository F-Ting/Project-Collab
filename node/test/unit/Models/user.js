import { assert } from 'chai';

import models from '../../../server/models';

import factories from '../../factories';
import truncate from '../../truncate';

describe('User model', () => {
  let user;

  beforeEach(async () => {
    await truncate("users");

    user = await factories.user();
  });

  it('should generate a user from the factory', async () => {
    assert.isOk(user.id);
  });

  it('should truncate the user table with each test', async () => {
    const count = await models.users.count();

    assert.equal(count, 1);
  });
});