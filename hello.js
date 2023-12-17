const http = require('http');

const express = require('express');

const app = express();
/* use allow us to add a new middleware function. It accepts an array of so-called
request handlers. This app use will be executed for every incoming request and this 
function will receive 3 arguments => req, res, next
* next is actually a function, passed to this function by express.js
* basically this next function you are receiving here has to be executed to allow 
the request to travel on to the next middleware
*/
app.use('/',(req,res,next) =>{
    //console.log('This always run!');
    next();

});
app.use('/add-product',(req,res,next) =>{
    //console.log('In another middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add product</button></form>');

});
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');

});

app.use('/',(req,res,next) =>{
    //console.log('In another middleware!');
    res.send('<h1>Hello from Express !</h1>');

});
const server = http.createServer(app);

server.listen(3000);