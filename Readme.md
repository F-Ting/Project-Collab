# Setup Guide:

## Clone the Repo
Clone the repo using `git clone https://github.com/F-Ting/Project-Collab.git`

## Individual Service setup
### Front-end Setup
1. Navigate into the `angular` folder via command line and run `npm install` 
2. After node packages are installed, run `npm run start`. You should see your browser popup showing `localhost:8000` as the url

### Back-end Setup
1. Navigate into the `node` folder via command line and run `npm install` 
2. After node packages are installed. Then proceed to run `npm run start`.
Note: you can have both the front-end and backend running via `npm run dev`. But make sure the front-end start-up script is NOT running.


### DB setup
Database and sample data setup
1. install [PostgresSQL](https://www.postgresql.org/) 
2. run `psql -U postgres < node/db/setup.sql` from the project root folder. (ensure `psql` is added into your path variables)
3. install sequelize package globally via `npm install -g sequelize` or use `npx` to run the sequelize command for the next step
4. Next `cd .\node` and run `sequelize db:migrate`, this will setup the database tables
5. Next `cd .\db` and run `psql -U project-collab-admin -d project-collab-db -f sample_data.sql`. Use the password `collab-project`, this will populate your database with some sample data, you should be able to use postman and test out some of the  existing API routes

## Docker Setup
Ensure Docker is installed and run the following command to setup the image
`docker-compose up -d`

To take down the container and the volumes with it.
`docker-compose down -v`

# Contributing Guide

## Issue board
The issue board consists of all issues relevant to upcoming updates. Any issues that are not 

## Contact
1. For any further information or 1 on 1 session to help you get started on contributing to this project, you can me at chen.daniel2099@gmail.com.

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