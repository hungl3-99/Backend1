var express = require('express')
var validate = require('../validate/user.validate');
var router = express.Router();
var auth = require('../middware/auth.middleware');
var db = require('../db.js');
var multer = require('multer');
var upload = multer({dest : './public/uploads/'})
const shortid = require('shortid');
module.exports = router;
var controllers = require("../controllers/user.controller");

router.get('/',  controllers.index);
  
router.get('/create' ,  controllers.create);

router.get('/search' , controllers.search);


router.post('/create' , upload.single('avatar') ,validate.postCreate, controllers.postCreate);
router.get('/:id', controllers.id);