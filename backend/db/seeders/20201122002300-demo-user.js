'use strict';
const faker = require('faker'); 
const bcrypt = require('bcryptjs'); 

function getRandom(max) {
  return Math.floor(Math.random() * max) + 1; 
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    const users = []; 

    for (let i = 0; i<20; i++) {
      const email = faker.internet.email();
      const username = faker.internet.userName(); 
      const password = faker.internet.password(8,1); 
      const hashedPassword = bcrypt.hashSync(password);

      users.push({
        email, 
        username, 
        hashedPassword, 
      })
    }
    
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io', 
        username: 'Demo', 
        hashedPassword: bcrypt.hashSync('password'), 
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()), 
      },
      ...users, 
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', null, {});
  }
};
