var express = require('express')
var router = express.Router();
var db = require('../db.js');
var controllers = require("../controllers/auth.controller");
module.exports = router;

router.get('/login' , controllers.login);
router.post('/login',controllers.postLogin);