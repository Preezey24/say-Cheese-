'use strict';
const { comments } = require('../../utils/fakerSeeders'); 


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', comments, {}); 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
