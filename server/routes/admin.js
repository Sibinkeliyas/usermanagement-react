var express = require('express');
var router = express.Router();
const adminController =  require('../controller/admin/adminLogin')



router.post('/login',adminController.adminLogin)


router.route("/").post(adminController.adminHome)

router.route("/update").post(adminController.adminupdate)


router.route("/block").post(adminController.adminBlock)

module.exports = router;