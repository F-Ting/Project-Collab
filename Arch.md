## Web services
Currently we have 2 services:
1. Service to handle all project based queries (Can be resource intensive due to large amount of table join and searching through large amounts of data. Potentially in the future, when the tag system is implemented, we will use a simple heuristic search to offer recommendations, requiring even more resources to compute)
2. Service to handle simple user base interactions (Time complexity is not costly, which will not clog up the server)

## Technologies (Tech Stack)
You have to decide which technology you will use to implement each webapp and endpoint. 
- Techologies used and why
Front-end: Angular 7 (Easy to pick up, simpler templating compared to the old react front-end that we replaced)
Back-end: Node.js, Express.js, Sequelize.js, PostgresDB (Full on javascript stack makes learning curve low for members to pickup, also Sequelize (ORM library) makes it easy to avoid programming in SQL and better conversion from database models to JSON objects and vice versa.) 