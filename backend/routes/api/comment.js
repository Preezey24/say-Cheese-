const express = require('express');
const asyncHandler = require('express-async-handler'); 
const { Comment, User } = require('../../db/models');

const router = express.Router(); 

router.get('/:photoId(\\d+)', asyncHandler(async (req, res) => {
    const photoId = parseInt(req.params.photoId, 10); 
    const comments = await Comment.findAll({
        where: {
            photoId,
        },
        include: User, 
    });
    let obj = {}; 
    for (let i=1; i < comments.length; i++) {
        let comment = comments[i]; 
        obj[comment.id] = comment;
    };
    res.json({
        obj
    })
}))

router.post('/', asyncHandler( async (req, res) => {
    const { comment, photoId, userId } = req.body;
    
    const newComment = Comment.build({
        comment, 
        photoId,
        userId, 
    });

    await newComment.save(); 

    res.json(newComment); 
}));

router.delete('/:commentId(\\d+)', asyncHandler( async (req, res) => {
    const commentId = parseInt(req.params.commentId, 10); 
    const comment = await Comment.findByPk(commentId);  

    if (comment) {
        await comment.destroy();  
    } 

    res.json(comment);
}));

router.put('/:commentId(\\d+)', asyncHandler( async (req, res) => {
    const commentId = parseInt(req.params.commentId, 10); 
    const { newComment } = req.body; 

    const oldComment = await Comment.findByPk(commentId); 
    oldComment.comment = newComment; 
    await oldComment.save(); 
    
    res.json(oldComment);
}))

module.exports = router; 
