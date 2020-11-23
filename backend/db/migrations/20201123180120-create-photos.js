'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Photos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imageLink: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false, 
      },
      author: {
        type: Sequelize.STRING(50),
        allowNull: false, 
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false, 
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references: {model: 'Users'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Photos');
  }
};