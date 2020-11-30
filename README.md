![Project Logo](./miscellaneous/images/say-cheese.JPG) 

# say Cheese!!!

>Welcome to say Cheese!!! 

A website created for everyone to share their amazing photos that they have taken all over the world! Once you sign up, you have access to millions of photos uploaded by other users for you to view and comment on. Have some cool photos of your own that you would like to share with others? Feel free to upload directly from your computer to our website.

As a logged-in user you will have the ability to: 
* Browse through all photos offered on the website
* Search through the photos for particular types of photos
* Leave comments and interact with other users 

## Features 

### Comments 

* Access and leave comments on any story
* Comments dynamically update on your page after you publish, edit or delete them

Comments functionality on the front-end were created with the use of the Fetch API and React Redux to provide real-time site updates without the need for a page refresh.
Here is a code snippet provided below, utilizing the store utility in Redux. 

```js
const commentReducer = (state = initialState, action) => {
    let newState; 
    switch (action.type) {
        case GET_COMMENTS:
            return action.payload; 
        case ADD_COMMENT: 
            newState = Object.assign({}, state); 
            newState[action.payload.id] = action.payload; 
            return newState;   
        case DELETE_COMMENT: 
            newState = Object.assign({}, state);
            delete newState[action.payload]; 
            return newState; 
        case EDIT_COMMENT: 
            newState  = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState; 
        default: 
            return state; 
    }
};
```

### Search 

* Use the search bar to look for your favourite types of photos, be that photos of animals or nature or even discos and bars.
* Each photo is associated with a list of tags that describe the photo. These search tags are what determines the result of the photos you see.

Below is a code snippet that assigns tags to the photos in the seeder file based on subject type (not all code included for brevity). 

```js 
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
} 
};
```

## Links 

All the photos you could wish to see with the click of this link: 


## Contributing 

* Rhys Previte - Preezey24 @ GitHub  
