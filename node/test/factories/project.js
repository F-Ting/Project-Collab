//borrowed from https://github.com/jordanell/testing-with-sequelize/tree/master/src
// test/factories/project.js
import faker from 'faker';
import models from '../../server/models';
/**
 * Generate an object which container attributes needed
 * to successfully create a project instance.
 * 
 * @param  {Object} props Properties to use for the project.
 * 
 * @return {Object}       An object to build the project from.
 */
const data = async (props = {}) => {
    const defaultProps = {
        name: faker.random.word(),
        description: faker.random.word(),
        github: faker.internet.userName(),
        url: faker.internet.url()
    };
    return Object.assign({}, defaultProps, props);
};
/**
 * Generates a project instance from the properties provided.
 *
 * @param  {Object} props Properties to use for the project.
 * 
 * @return {Object}       A project instance
 */
export default async (props = {}) =>
    models.projects.create(await data(props));