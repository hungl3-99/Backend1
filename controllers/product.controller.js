var db = require('../db.js');

module.exports.index = (req , res) => {
    var page = parseInt(req.query.page)|| 1;
    var perPage = 8 ;

    var start = (page-1)* perPage;
    var end = page * perPage ;

    res.render('product.pug' , {
        products : db.get('products').value().slice(start , end)
    });
}