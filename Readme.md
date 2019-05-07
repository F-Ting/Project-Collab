## Project Overview
Project Description can be found at https://docs.google.com/document/d/1U6OhjnrtKAbctL48Yah2XUSOw6cMEyru6UtWubOEdL8/edit#

## Technologies (Tech Stack)
- Technologies
Front-end: Angular 7 
Back-end: Node.js, Express.js, Sequelize.js, PostgresDB
- Sequelize (ORM library) makes it easy to avoid programming in SQL and allows for easier conversion from database models to JSON objects and vice versa
Testing Frameworks: Karma for Angular and Mocha + Chai for node. These frameworks are javascript based, making it very easy to pick up.

## APIs
Currently, existing APIs are documented in the [API Wiki](https://github.com/csc302-spring-2019/proj-HackHub/wiki/API-WIKI)

We have also created API documentation for how our API will evolve to in the future. This documentation is created using the recommended swagger.io site. We've generated an yaml file.
Open `api.yaml` file in the swagger editor to view current API document

### How APIs are tested
The procedure for API tests are as follows:
1. We setup environment variables such that the server will connected to a test database during testing.
2. We connect out testing framework to the test database.
3. Before each test is ran, we empty our test database.
4. Each test will generate and insert a fixed amount data in the database for the particular test.
5. Each test will then make API requests to the server and match results between data generated in step 4 and the data we receive from the API tests.