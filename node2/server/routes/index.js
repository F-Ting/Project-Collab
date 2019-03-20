const usersController = require('../controllers').users;
const projectsController = require('../controllers').projects;
const userAssociationsController = require('../controllers').user_associations;
const upload = require('../controllers').upload;
const Users = require('../models').users;

// Authentication for user resource routes
const authenticate = (req, res, next) => {
	if (req.session.user) {
    req.body.user = req.session.user
    next()
	} else {
		res.status(401).send()
	}
}

// Authentication for user resource routes
const adminAuthenticate = (req, res, next) => {
	if (req.session.user && req.session.type == "admin") {
    req.body.user = req.session.user
    next()
	} else {
		res.status(401).send()
	}
}


module.exports = (app) => {
  app.use((req, res, next)=>{
	res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    res.header('Access-Control-Allow-Credentials',' true');
    next();
  });
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Project Collab API!',
  }));


  app.get('/api/users', usersController.list);


  // gets all projects
  app.get('/api/projects', projectsController.list);
  // get all projects by status
  app.get('/api/projects/:status', projectsController.listApprovedOrUnapproved)
  // get all projects by search
  app.post('/api/projects/search', projectsController.listSearch);

  // * user_associations routes *
  // add a new user to a project
  app.post('/api/user_associations/add', userAssociationsController.create);
  // get all users associations for a project (equal to getting all users for a project)
  app.get('/api/user_associations/project/:project', userAssociationsController.listUsers);
  //get all users associations for a User (equal to getting all projects for a User)
  app.get('/api/user_associations/user', authenticate, userAssociationsController.listProjects);
  // get your status on a project
  app.get('/api/user_associations/user/project/:project', authenticate, userAssociationsController.yourProjectStatus);
  // get all users associations a user is not aprt (equal to getting all projects a user is not apart of)
  app.get('/api/user_associations/user/not', authenticate, userAssociationsController.listNotInProjects);
};
