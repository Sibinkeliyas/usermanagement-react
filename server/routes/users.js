var express = require('express');
var router = express.Router();
const multer = require('multer');

const {protect} = require('../middleware/jwt')


// storage

const upload = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
      let ext = path.extname(file.originalname);
      if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".webp") {
        cb(new Error("File type is not supported"), false);
        return;
      }
      cb(null, true);
    },
  });


const userLoginPost = require('../controller/user/login')

/* GET users listing. */
router.post('/register',userLoginPost.registerPost)

router.post('/login',userLoginPost.loginUserPost)

router.route("/").get(protect, userLoginPost.userHome); 

router.route('/profile').post(upload.fields([
    { name: "image", maxCount: 1 }]),userLoginPost.userProfile)

router.get("/get-profile",userLoginPost.userprofileGet)




module.exports = router;
