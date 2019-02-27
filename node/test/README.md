## Before running any API tests

Find the `pg_hba.conf` file in the folder where your Postgres is located, for me it is in `C:\Program Files\PostgreSQL\11\data`. You will want to then open the file with some editor, scroll to the bottom then change the `md5` under `METHOD` column all to `trust`. This will allow you to log onto any account without having to enter any password.

Ensure `psql -U postgres < node/db/setup.sql` was ran during your db setup so that `root` user is created and `project-collab-test-db` is created.

## Checking to see tests are running properly
1. Run `npm run test` to see if tests are running
2. Checkout `api/user.js` file to see example tests
3. Happy testing! :)