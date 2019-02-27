//borrowed from https://github.com/jordanell/testing-with-sequelize/tree/master/src
// test/factories/user.js
import faker from 'faker';
import models from '../../server/models';
/**
 * Generate an object which container attributes needed
 * to successfully create a user instance.
 * 
 * @param  {Object} props Properties to use for the user.
 * 
 * @return {Object}       An object to build the user from.
 */
const data = async (props = {}) => {
  const defaultProps = {
    email: faker.internet.email(),
    name: faker.name.firstName() + " " + faker.name.lastName(),
    username: faker.internet.userName(),
    password: faker.internet.password()
  };
  return Object.assign({}, defaultProps, props);
};
/**
 * Generates a user instance from the properties provided.
 * 
 * @param  {Object} props Properties to use for the user.
 * 
 * @return {Object}       A user instance
 */
export default async (props = {}) =>
  models.users.create(await data(props));