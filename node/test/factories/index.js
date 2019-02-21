//borrowed from https://github.com/jordanell/testing-with-sequelize/tree/master/src
import { forEach } from 'lodash';
import requireDirectory from 'require-directory';

const factories = requireDirectory(module, './');

forEach(factories, (value, key) => { factories[key] = value.default; });

export default factories;