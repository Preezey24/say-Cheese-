'use strict';
const faker = require('faker'); 
const { Photo } = require('../models'); 

const tagObj = {
  animals: [
    "dog", 
  "cat", 
  "bird", 
  "turtle",
  "mouse", 
  "eagle",
  "lion", 
  "pets", 
  ], 
  cats: [
    "cat", 
    "house",
  ], 
  nature: [
    "waterfall", 
    "mountain", 
    "sky", 
    "ocean", 
    "nature", 
  ], 
  sports: [
    "sport", 
    "running", 
    "jumping", 
    "boxing", 
    "swimming", 
    "snowboarding", 
  ], 
  nightlife: [
    "house", 
    "party", 
    "clubbing", 
    "dancing", 
    "restaurants", 
    "bars",
    "beer", 
  ], 
  food: [
    "hamburger", 
    "salad", 
    "soup", 
    "healthy", 
  ], 
  transport: [
    "cars", 
    "trucks",
    "bikes", 
    "roads", 
    "railways", 
    "planes", 
    "boat", 
  ]
}

function tagSorter(id, imageLink, tagObj, globalArr) {
  const urlArr = imageLink.split('/');
  if (urlArr.includes('animals')) {
    tagObj['animals'].forEach(tag => {
      globalArr.push({id, tag});
    }) 
  } else if (urlArr.includes('cats')) {
    tagObj['cats'].forEach(tag => {
      globalArr.push({id, tag});
    })  
  } else if (urlArr.includes('nature')) {
    tagObj['nature'].forEach(tag => {
      globalArr.push({id, tag});
    })  
  } else if (urlArr.includes('sports')) {
    tagObj['sports'].forEach(tag => {
      globalArr.push({id, tag});
    })  
  } else if (urlArr.includes('nightlife')) {
    tagObj['nightlife'].forEach(tag => {
      globalArr.push({id, tag});
    })  
  } else if (urlArr.includes('food')) {
    tagObj['food'].forEach(tag => {
      globalArr.push({id, tag});
    })  
  } else if (urlArr.includes('transport')) {
    tagObj['transport'].forEach(tag => {
      globalArr.push({id, tag});
    })  
  }
}; 

async function photoSorter() {
  const photos = await Photo.scope('tags').findAll({})
  const globalArr = [];
  let i = 0; 
  while (i < photos.length - 1) {
    const photo = photos[i]; 
    const {id, imageLink} = photo; 
    tagSorter(id, imageLink, tagObj, globalArr); 
    i++;
  }
  return globalArr; 
};

const globalArr = photoSorter(); 
console.log(globalArr);

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('Tags', globalArr, {});
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('Tags', null, {});
//   }
// };
