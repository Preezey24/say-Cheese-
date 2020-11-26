'use strict';
const { globalArr } = require('../../utils/fakerSeeders'); 

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', globalArr, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
