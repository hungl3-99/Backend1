const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var userRouter = require('./routes/user.route');
var authRouter = require('./routes/auth.route');
var productRouter = require('./routes/product.route');
var auth = require('./middware/auth.middleware');
var sessionMiddleware = require('./middware/session.middleware')
var cartRouter = require('./routes/cart.route');
const port = 3000;
app.set('views', './views')
app.set('view engine', 'pug') 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser('dshfsjbdfksbdkjbnfjkfsk'));
app.use(sessionMiddleware);
app.get('/', (req, res) => {
  res.send('Helllooo');
});
app.use('/users',auth.requireAuth,userRouter);
app.use('/auth' , authRouter);
app.use('/product' , productRouter);
app.use('/cart' ,cartRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});