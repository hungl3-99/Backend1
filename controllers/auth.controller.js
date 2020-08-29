var db = require('../db.js');
var md5 = require('md5');
module.exports.login = function(req , res){
    res.render('login.pug')
}

module.exports.postLogin = (req , res) => {
    var email = req.body.email ;
    var password = req.body.password;
    var user = db.get('users').find({email : email}).value();

    if(!user){
        res.render('login.pug' , {
            errors : [
                'user does not exist'
            ],
            values : req.body
        });
        return;
    }

    var hashPassword = md5(password);
    console.log(hashPassword);
    if(user.password !== hashPassword){
        res.render('login.pug' , {
            errors : [
                'wrong password'
            ],
            values : req.body
        });
        return;
    }
    res.cookie('userId' , user.id ,{
        signed : true
    });
    res.redirect('/users');
};