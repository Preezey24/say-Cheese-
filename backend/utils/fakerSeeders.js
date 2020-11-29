'use strict';
const faker = require('faker');

//Photo generation 
const photos = []; 
const users = 23;

function getRandom(max) {
    return Math.floor(Math.random() * max) + 1; 
};

const photoTitles = [
  "Missing Cloud",
  "The Shadowy Academy",
  "Prophecy of Girlfriend",
  "The Angels's Nobody",
  "The Academy of the Stars",
  "Dream in the Sex",
  "Delicious Weeping",
  "The Some Girlfriend",
  "Heart of Fairy",
  "The Academy's Rings",
  "The Teacher of the Night",
  "Name in the Man",
  "White Theft",
  "The Grey Misty",
  "Pleasure of Snow",
  "The Door's Planet",
  "The Servant of the Time",
  "History in the Witches", 
  "Naked Secret",
  "The Dwindling Lord",
  "Time of Servant",
  "The Window's Alien",
  "The Mist of the Angels",
  "Past in the Alien",
]

function randomPhoto() {
    const photoArray = ["animals", "cats", "food", "nightlife", "nature", 
    "sports", "transport"]; 
    const i = getRandom(photoArray.length-1); 
    const type = photoArray[i]; 
    const sizeOne = 640; 
    const sizeTwo = 480;  
    return faker.image.imageUrl(sizeOne,sizeTwo,type);    
};

for(let i=0; i<50; i++) {
  const userId = getRandom(users); 
  const titleValNum = getRandom(photoTitles.length-1); 
  const id = i + 1; 
  const title = photoTitles[titleValNum];
  const author = `By ${faker.name.firstName()} ${faker.name.lastName()}`;
  const description = faker.random.words(15 + getRandom(20)); 
  const createdAt = faker.date.past(2); 
  const updatedAt = faker.date.between(createdAt, faker.date.recent());
  const imageLink = `${randomPhoto()}/any?dummy=${i}`


  photos.push({
    id, 
    imageLink, 
    title, 
    author, 
    description, 
    userId, 
    createdAt, 
    updatedAt,
  })
}; 

//Tag generation 
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

function tagSorter(photoId, imageLink, tagObj, globalArr) {
const urlArr = imageLink.split('/');
const createdAt = new Date(); 
const updatedAt = new Date(); 

if (urlArr.includes('animals')) {
    tagObj['animals'].forEach(tag => {
    globalArr.push({tag, photoId, createdAt, updatedAt});
    }) 
} else if (urlArr.includes('cats')) {
    tagObj['cats'].forEach(tag => {
    globalArr.push({tag, photoId, createdAt, updatedAt});
    })  
} else if (urlArr.includes('nature')) {
    tagObj['nature'].forEach(tag => {
    globalArr.push({tag, photoId, createdAt, updatedAt});
    })  
} else if (urlArr.includes('sports')) {
    tagObj['sports'].forEach(tag => {
    globalArr.push({tag, photoId, createdAt, updatedAt});
    })  
} else if (urlArr.includes('nightlife')) {
    tagObj['nightlife'].forEach(tag => {
    globalArr.push({tag, photoId, createdAt, updatedAt});
    })  
} else if (urlArr.includes('food')) {
    tagObj['food'].forEach(tag => {
    globalArr.push({tag, photoId, createdAt, updatedAt});
    })  
} else if (urlArr.includes('transport')) {
    tagObj['transport'].forEach(tag => {
    globalArr.push({tag, photoId, createdAt, updatedAt});
    })  
}
}; 

function photoSorter() { 
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

for (let i = 0; i < photos.length; i++) {
    let photo = photos[i]; 
    delete photo.id;  
}

//Comments generation 
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

const comments = []; 
const photosNum = 50

for(let i=0; i<50; i++) {
    const userId = getRandom(users); 
    const photoId = getRandom(photosNum); 
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
};

module.exports = {
    photos,
    globalArr, 
    comments
}