const express = require('express');
const asyncHandler = require('express-async-handler'); 
const { Comment } = require('../../db/models');

const router = express.Router(); 

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

router.delete('/:commentId(\\d+)', asyncHandler( async (req, res) => {
    const commentId = parseInt(req.params.commentId, 10); 
    const comment = await Comment.findByPk(commentId); 
    const { photoId } = req.body; 

    if (comment) {
        await comment.destroy();  
    } 
    const comments = await Comment.findAll({
        where: {
            photoId,
        },
    });
    res.json(comments);
}));

router.put('/:commentId(\\d+)', asyncHandler( async (req, res) => {
    const commentId = parseInt(req.params.commentId, 10); 
    const { newComment, photoId } = req.body; 

    const oldComment = await Comment.findByPk(commentId);
    console.log(oldComment); 
    oldComment.comment = newComment; 
    await oldComment.save(); 
    
    const comments = await Comment.findAll({
        where: {
            photoId,
        },
        order: [
            ['id', 'ASC'],
        ]
    });
    res.json(comments);
}))

module.exports = router; 
