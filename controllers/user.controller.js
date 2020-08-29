
var db = require('../db.js');
const shortid = require('shortid');

module.exports.index = (req, res) => {
    res.render('index.pug' ,{users : db.get('users').value()});
};

module.exports.search = function(req , res){
    var q = req.query.q;
    var macthUser = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('index.pug',{users:macthUser});
};
module.exports.create = function(req , res){
    res.render('create.pug');
};
module.exports.postCreate = (req ,res) =>{
    req.body.id = shortid.generate();
    req.body.avatar = req.file.path.split('\\').slice(1).join('/')
    db.get('users').push(req.body).write();
    res.redirect('/users');
};
module.exports.id = (req ,res) =>{
   var id = req.params.id;

   var user = db.get('users').find({id : id}).value();

   res.render('view.pug' ,{
       user : user
   });
};