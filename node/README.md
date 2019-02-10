## Starting development server

Run `npm run start` for a dev server. Navigate to `http://127.0.0.1:8000/`. 

## DB setup
Database and sample data setup
1. install [PostgresSQL](https://www.postgresql.org/) 
2. run `psql -U postgres < node/db/setup.sql` from the project root folder. (ensure `psql` is added into your path variables)
3. Next `cd .\project-team-20\node` and run `sequelize db:migrate`, this will setup the database tables
4. Next `cd .\project-team-20\node\db` and run `psql -U project-collab-admin -d project-collab-db -f sample_data.sql`. Use the password `collab-project`, this will populate your database with some sample data, you should be able to use postman and test out some of the existing API routes

## Further help

To get more help on the Sequelize Package go check out the [Sequelize Docs](http://docs.sequelizejs.com).
