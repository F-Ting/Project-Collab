## Starting development server

Run `npm run start` for a dev server. Navigate to `http://127.0.0.1:8000/`. 

## DB setup
Database and sample data setup
1. install [PostgresSQL](https://www.postgresql.org/) 
2. run `psql -U postgres < node/db/setup.sql` from the project root folder. (ensure `psql` is added into your path variables)
3. install sequelize package globally via `npm install -g sequelize` or use `npx` to run the sequelize command for the next step
4. Next `cd .\node` and run `sequelize db:migrate`, this will setup the database tables
5. Next `cd .\db` and run `psql -U project-collab-admin -d project-collab-db -f sample_data.sql`. Use the password `collab-project`, this will populate your database with some sample data, you should be able to use postman and test out some of the  existing API routes

## Further help

To get more help on the Sequelize Package go check out the [Sequelize Docs](http://docs.sequelizejs.com).

## APIs
We have created API documentation for how our API will evolve to in the future. This documentation is created using the recommended swagger.io site. We've generated an yaml file.
Open `api.yaml` file in the swagger editor to view current API document

### How APIs are tested
The procedure for API tests are as follows:
1. We setup environment variables such that the server will connected to a test database during testing.
2. We connect out testing framework to the test database.
3. Before each test is ran, we empty our test database.
4. Each test will generate and insert a fixed amount data in the database for the particular test.
5. Each test will then make API requests to the server and match results between data generated in step 4 and the data we receive from the API tests.