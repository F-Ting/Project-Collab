'use strict';
module.exports = (sequelize, DataTypes) => {
  const projects = sequelize.define('projects', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: DataTypes.STRING,
    github: DataTypes.STRING,
    url: DataTypes.STRING,
    project_start_date: DataTypes.DATE,
    image: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ['approved', 'unapproved', 'rejected']
    },
  }, {});
  projects.associate = function(models) {
    projects.hasMany(models.user_associations, {
        foreignKey: 'project_id',
        as: 'user_associations',
    });
    projects.hasMany(models.tag_to_project, {
        foreignKey: 'project_id',
        as: 'tag_to_project',
    });
  };
  return projects;
};
