const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const session = require('express-session')
// Set up the express app
const app = express();

//post to listen to
app.set('port', 8000);

// Log requests to the console.
app.use(logger('dev'));
app.use(fileUpload());

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json({limit: '8mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

// Add express sesssion middleware
app.use(session({
	secret: 'oursecret',
	resave: false,
	saveUninitialized: false,
	cookie: {
		expires: 1800000, // 30 mins
		httpOnly: true
	}
}));

// Serve the static files from the React app
app.use('/resource', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));

app.use((req, res, next)=>{
	res.header("Access-Control-Allow-Origin", "https://www.project-collab.ca");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    res.header('Access-Control-Allow-Credentials',' true');
    next();
  });

app.get('/api', (req, res) => res.status(200).send({
	message: 'Welcome to the Project Collab API!',
}));

// Require our routes into the application.
let apiRoutes = require('./server/routes');

app.all("/api/*", apiRoutes);

app.get("/*", (req, res) => {
    return res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });

module.exports = app;
