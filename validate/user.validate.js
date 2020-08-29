const { postCreate } = require("../controllers/user.controller");

module.exports.postCreate= function(req , res , next ){
    var errors = [];
    if (!req.body.name){
        errors.push("name is require");
    }
    if(!req.body.phone){
        errors.push("Phone is require");
    }
    if(errors.length){
        res.render('create.pug' ,{
            errors : errors,
            values : req.body
        });
        return;
    }
    next();
}