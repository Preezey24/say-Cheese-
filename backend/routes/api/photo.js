const express = require('express');
const asyncHandler = require('express-async-handler'); 
const { Photo, Comment } = require('../../db/models');

const router = express.Router();

router.get('/:photoId(\\d+)', asyncHandler(async (req, res) => {
    const photoId = parseInt(req.params.photoId, 10); 
    const photo = await Photo.scope('photoPage').findByPk(photoId); 
    
    const {id, imageLink, title, author, description, userId, createdAt} = photo; 
    res.json({
        id,
        imageLink,
        title,
        author, 
        description, 
        userId,
        createdAt, 
    })
}));

router.get('/', asyncHandler(async (req, res) => {
    const photos = await Photo.findAll({}); 
    let obj = {}; 
    for (let i=0; i < photos.length-1; i++) {
        let photo = photos[i]; 
        obj[photo.id] = photo; 
    }
    res.json(obj); 
}));


module.exports = router; 