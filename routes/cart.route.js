var express = require('express')
var router = express.Router();
var db = require('../db.js');
var controllers = require('../controllers/cart.controller');

router.get('/add/:productId' , controllers.addToCart);

module.exports = router;