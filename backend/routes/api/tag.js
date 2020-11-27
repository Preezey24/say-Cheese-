const express = require('express');
const asyncHandler = require('express-async-handler'); 
const { Tag, Photo } = require('../../db/models');

const router = express.Router(); 

router.get('/:searchTerm', asyncHandler(async (req, res) => {
    const searchTerm = req.params.searchTerm; 
    const photos = await Tag.findAll({
        where: {
            tag: searchTerm, 
        },
        include: Photo,
    });
    console.log(JSON.stringify(photos)); 
    res.json(photos);  
}));

module.exports = router; 