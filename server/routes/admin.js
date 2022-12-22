var express = require('express');
var router = express.Router();
const adminController =  require('../controller/admin/adminLogin')



router.post('/login',adminController.adminLogin)

module.exports = router;