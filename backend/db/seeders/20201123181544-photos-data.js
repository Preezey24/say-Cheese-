'use strict';
const faker = require('faker'); 

function getRandom(max) {
  return Math.floor(Math.random() * max) + 1; 
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    const photos = []; 
    const users = 23; 

    for(let i=0; i<50; i++) {
      const userId = getRandom(users); 
      const title = faker.random.words(3 + getRandom(5));
      const author = `By ${faker.name.firstName()} ${faker.name.lastName()}`;
      const description = faker.random.words(15 + getRandom(20)); 
      const createdAt = faker.date.past(2); 
      const updatedAt = faker.date.between(createdAt, faker.date.recent());
      const imageLink = faker.image.animals(); 

      photos.push({
        imageLink, 
        title, 
        author, 
        description, 
        userId, 
        createdAt, 
        updatedAt,
      })
    }
    return queryInterface.bulkInsert('Photos', photos, {}); 
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Photos', null, {});
  }
};
