var express = require('express');
var router = express.Router();

const {protect} = require('../middleware/jwt')


const userLoginPost = require('../controller/user/login')

/* GET users listing. */
router.post('/register',userLoginPost.registerPost)

router.post('/login',userLoginPost.loginUserPost)

router.route("/").get(protect, userLoginPost.userHome); 

router.route('/profile').post(userLoginPost.userProfile)




module.exports = router;
