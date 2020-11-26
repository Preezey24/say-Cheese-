'use strict';
const faker = require('faker'); 

function getRandom(max) {
  return Math.floor(Math.random() * max) + 1; 
}

function randomPhoto(string) {
  const photoArray = ["animals", "cats", "food", "nightlife", "nature", 
  "sports", "transport"]; 
  const stringArr = string.split('/'); 
  const index = stringArr.indexOf('animals'); 
  const i = getRandom(photoArray.length-1); 
  stringArr[index] = photoArray[i]; 
  return stringArr.join('/');  
};

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
      let imageLink = `${faker.image.animals()}/any?dummy=${i}`;
      imageLink = randomPhoto(imageLink); 


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
  },
};
