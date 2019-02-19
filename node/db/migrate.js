//borrowed from https://github.com/jordanell/testing-with-sequelize/blob/master/scripts/db/migrate.js
import { spawn } from 'child-process-promise';
const spawnOptions = { stdio: 'inherit' };
(async () => {
  // Our database URL
  const url = 'postgres://root@localhost:5432/project-collab-test-db'
try {
    // Migrate the DB
    await spawn('./node_modules/.bin/sequelize', ['db:migrate', `--url=${url}`], spawnOptions);
    console.log('*************************');
    console.log('Migration successful');
  } catch (err) {
    // Oh no!
    console.log('*************************');
    console.log('Migration failed. Error:', err.message);
    process.exit(1);
  }
process.exit(0);
})();