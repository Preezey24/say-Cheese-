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
  }, 
  {
    defaultScope: {
      attributes: {
        exclude: ['description', 'createdAt', 'updatedAt'],
      }
    },
    scopes: {
      photoPage: {
        attributes: { exclude: [ 'updatedAt ']}
      }
    },
  });
  Photo.associate = function(models) {
    Photo.belongsTo(models.User, {foreignKey: 'userId'}); 
    Photo.hasMany(models.Comment, {foreignKey: 'photoId'});  
  };
  return Photo;
};