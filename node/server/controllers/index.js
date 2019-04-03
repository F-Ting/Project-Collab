const users = require('./users');
const projects = require('./projects');
const tag_to_project = require('./tag_to_project');
const tag_to_user = require('./tag_to_user');
const rec = require('./rec');
const user_associations = require('./user_associations');
const upload = require('./upload');

module.exports = {
  users,
  projects,
  tag_to_project,
  tag_to_user,
  user_associations,
  upload,
  rec
};
