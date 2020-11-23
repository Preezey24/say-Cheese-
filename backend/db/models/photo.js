'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    imageLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
    },
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.User, {foreignKey: 'userId'}), 
  };
  return Photo;
};