const express = require('express');
const asyncHandler = require('express-async-handler'); 
const { Comment } = require('../../db/models');

const router = express.Router(); 

router.get('/:photoId(\\d+)', asyncHandler(async (req, res) => {
    const photoId = parseInt(req.params.photoId, 10); 
    const comments = await Comment.findAll({
        where: {
            photoId, 
        }
    });
    res.json(comments); 
}))

router.post('/', asyncHandler( async (req, res) => {
    const { comment, photoId, userId } = req.body;
    
    await Comment.create({
        comment, 
        photoId,
        userId, 
    });

    const comments = await Comment.findAll({
        where: {
            photoId,
        },
    }); 
    res.json(comments); 
}));

module.exports = router; 
