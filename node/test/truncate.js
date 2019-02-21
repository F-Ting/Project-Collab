//borrowed from https://github.com/jordanell/testing-with-sequelize/tree/master/src
import models from '../server/models';

const truncateTable = (modelName) =>
  models[modelName].destroy({
    where: {},
    force: true,
  });

export default async function truncate(model) {
  if (model) {
    return truncateTable(model);
  }

  return Promise.all(
    Object.keys(models).map((key) => {
      if (['sequelize', 'Sequelize'].includes(key)) return null;
      return truncateTable(key);
    })
  );
}