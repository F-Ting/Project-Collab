const users = require('./users');
const projects = require('./projects');
const tag_to_project = require('./tag_to_project');
const user_associations = require('./user_associations');
const upload = require('./upload');

module.exports = {
  users,
  projects,
  tag_to_project,
  user_associations,
  upload
};
