//const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();
/* use allow us to add a new middleware function. It accepts an array of so-called
request handlers. This app use will be executed for every incoming request and this 
function will receive 3 arguments => req, res, next
* next is actually a function, passed to this function by express.js
* basically this next function you are receiving here has to be executed to allow 
the request to travel on to the next middleware
*/
//app.engine('hbs', expressHbs());
//app.set('view engine','hbs');
app.set('view engine','pug');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const adminData = require("./routes/admin");
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminData.routes);
/* This allows us to put a common starting position */
app.use(shopRoutes);

/*app.use('/add-product',(req,res,next) =>{
    //console.log('In another middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add product</button></form>');

});
app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');

});*/

/*app.use('/',(req,res,next) =>{
    //console.log('In another middleware!');
    res.send('<h1>Hello from Express !</h1>');

});*/
//catch file
app.use((req,res,next)=>{
    //res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
})
//const server = http.createServer(app);

app.listen(3000);