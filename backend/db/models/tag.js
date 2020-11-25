'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    tag: {
      type: DataTypes.STRING(35),
      allowNull: false,
    },
    photoId: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
  }, {});
  Tag.associate = function(models) {
    Tag.belongsTo(models.Photo, {foreignKey: 'photoId'});
  };
  return Tag;
};