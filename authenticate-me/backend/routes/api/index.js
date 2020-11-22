const router = require('express').Router(); 

//TEST CASES 

//1: test routing response 
// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body }); 
// });

//2: test token cookie works
const asyncHandler = require('express-async-handler'); 
const { setTokenCookie } = require('../../utils/auth.js'); 
const { User } = require('../../db/models'); 
router.get('/set-token-cookie', asyncHandler(async (req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo'
        },
    })
    setTokenCookie(res, user); 
    return res.json({ user }); 
})); 

//3: test restoreUser auth 
const {restoreUser} = require('../../utils/auth.js'); 
router.get('/restore-user', restoreUser, (req, res) => {
    return res.json(req.user); 
});

//4: test require auth 
const { requireAuth } = require('../../utils/auth.js'); 
router.get('/require-auth', requireAuth, (req, res) => {
    return res.json(req.user); 
});



module.exports = router; 