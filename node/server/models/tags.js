'use strict';
module.exports = (sequelize, DataTypes) => {
  const tags = sequelize.define('tags', {
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  }, {});
  tags.associate = function(models) {
      tags.hasMany(models.tag_to_user, {
          foreignKey: 'tag_id',
          as: 'tag_to_user',
      });
      tags.hasMany(models.tag_to_project, {
          foreignKey: 'tag_id',
          as: 'tag_to_project',
      });
  };
  return tags;
};
