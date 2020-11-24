const express = require('express');
const asyncHandler = require('express-async-handler'); 
const { Photo, Comment } = require('../../db/models')

const router = express.Router();

router.get('/:photoId(\\d+)', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.photoId, 10);
    console.log(id);  
    const photo = await Photo.scope('photoPage').findByPk(id, {
        include: Comment,
    }); 
    res.json(photo); 
}));

router.get('/', asyncHandler(async (req, res) => {
    const photos = await Photo.findAll({});
    res.json(photos); 
}));


module.exports = router; 