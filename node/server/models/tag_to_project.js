'use strict';
module.exports = (sequelize, DataTypes) => {
  const tag_to_project = sequelize.define('tag_to_project', {}, {});
  tag_to_project.associate = function(models) {
      tag_to_project.belongsTo(models.projects, {
        foreignKey: 'project_id',
        onDelete: 'CASCADE',
        allowNull: false,
      });
      tag_to_project.belongsTo(models.tags, {
        foreignKey: 'tag_id',
        onDelete: 'CASCADE',
        allowNull: false,
      });
  };
  return tag_to_project;
};
