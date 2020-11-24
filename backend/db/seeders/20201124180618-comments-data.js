'use strict';
const { random } = require('faker');
const faker = require('faker'); 

function getRandom(max) {
  return Math.floor(Math.random() * max) + 1; 
}

const randomComments = [
  "Great photo!", 
  "I think the lighting on this could have been improved", 
  "Marvillosa!", 
  "How did you manage this photo!?!", 
  "Me encanta esta foto", 
  "Where was this taken?", 
  "Perfect", 
  "Beautiful",
  "Great detail in this photo", 
  "Vous avez merite 1 BON POINT!", 
  "Fantastic", 
  "This image could have looked better with a nicer camera", 
  "Woaaaaaaaaaaaaah", 
  "One word...howw?"
]


module.exports = {
  up: (queryInterface, Sequelize) => {
    const comments = []; 
    const users = 23; 
    const photos = 50; 

    for(let i=0; i<50; i++) {
      const userId = getRandom(users); 
      const photoId = getRandom(photos); 
      const comment = randomComments[getRandom(randomComments.length) - 1];
      const createdAt = faker.date.past(2); 
      const updatedAt = faker.date.between(createdAt, faker.date.recent());

      comments.push({
        comment, 
        photoId, 
        userId,
        createdAt, 
        updatedAt,
      })
    }
    return queryInterface.bulkInsert('Comments', comments, {}); 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
