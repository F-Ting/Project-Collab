'use strict';
module.exports = (sequelize, DataTypes) => {
  const tag_to_user = sequelize.define('tag_to_user', {}, {});
  tag_to_user.associate = function(models) {
      tag_to_user.belongsTo(models.users, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        allowNull: false,
      });
      tag_to_user.belongsTo(models.tags, {
        foreignKey: 'tag_id',
        onDelete: 'CASCADE',
        allowNull: false,
      });
  };
  return tag_to_user;
};
