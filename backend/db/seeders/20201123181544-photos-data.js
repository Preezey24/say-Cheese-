'use strict'; 
const { photos } = require('../../utils/fakerSeeders'); 

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', photos, {}); 
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Photos', null, {});
  },
};
