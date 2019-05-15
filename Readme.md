## Project Overview
Currently, UofT students are resorting to individual projects, finding projects from personal connections or online resources. However, since students have a variety of technical experience, it is often difficult to find peers who have similar skills to work with or find a willing mentor to learn from. Project-collab provides these students with the platform to connect with each other, along with resources to get students started working with new technology or projects they are interested in.
On a recent community survey conducted, we asked the community of computer science students, how the CSSU/CS department/CS community could support them in aspects of career and side projects. The results were quite reassuring: 12/49 responses wanted support for project related work, through a platform to share and discover personal projects. The community seems to have validated the project for us, bringing up the need for the platform we have envisioned.
The raw data is viewable in an excel file with the following link:https://docs.google.com/spreadsheets/d/1ka9U_uB1w1ItPvCYsGl3NL-Egw5o3WS78GTWiSnlbFQ/edit?usp=sharing


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