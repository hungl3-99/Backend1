var express = require('express');
var router = express.Router();
var db = require('../db.js');

var controller = require('../controllers/product.controller');
module.exports = router;
router.get('/index' , controller.index);