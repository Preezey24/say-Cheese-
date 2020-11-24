const express = require('express'); 
const router = express.Router(); 
const apiRouter = require('./api'); 
const asyncHandler = require('express-async-handler'); 
const { Photo } = require('../db/models')

// Add a XSRF-TOKEN cookie in development
router.get('/api/csrf/restore', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    debugger; 
    return res.json({});
});

router.get('/hello', asyncHandler(async (req, res) => {
    const photos = await Photo.findAll({});
    res.json(photos); 
}));

router.use('/api', apiRouter); 

// For testing only 
// router.get('/hello/world', function(req, res) {
//     res.cookie('XSRF-TOKEN', req.csrfToken()); 
//     res.send("Hello World"); 
// });

module.exports = router; 