const express = require('express');
const asyncHandler = require('express-async-handler'); 
const { Photo } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const photos = await Photo.findAll({});
    res.json(photos); 
}));

router.get('/:photoId', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10); 
    const photo = await Photo.findByPk(id); 
    res.json(photo); 
}))

module.exports = router; 