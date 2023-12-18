# Express.js Project

This is a sample README for an Express.js project.

## Table of Contents

- [Introduction](#introduction)
- [Middleware and HTTP Server](#middleware-and-http-server)
- [send](#send)
- [bodyParser](#bodyParser)
- [File Paths and Routing](#file-paths-and-routing)
- [IntelliJ Shortcuts](#intellij-shortcuts)
- [Usage](#usage)
## Introduction

Welcome to the Express.js project! This project utilizes Express.js for building a web application.

## Middleware and HTTP Server

In this section, we use middleware functions and create an HTTP server with Express.js.
```javascript
const http = require('http');
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next();
});

app.use((req, res, next) => {
    console.log('In another middleware!');
});

const server = http.createServer(app);
server.listen(3000);
```
output=>

[nodemon] restarting due to changes...

[nodemon] starting `node hello.js`

`In the middleware!`

`In the middleware!`

The reason for that is it has to call next() here to allow the request to travel on to the next middleware in the line
```javaScript
app.use((req,res,next) =>{
    console.log('In the middleware!');
    next();

});
app.use((req,res,next) =>{
    console.log('In another middleware!');

});
```
Output =>

[nodemon] restarting due to changes...

[nodemon] starting `node hello.js`

`In the middleware!`

`In another middleware!`

## send

```JavaScript
app.use((req,res,next) =>{
    console.log('In another middleware!');	
    res.send();
});
```
Send allows to send a response. This allows us to attach a body which is of type any. (html code)

```JavaScript
app.use((req,res,next) =>{
    console.log('In another middleware!');
    res.send('<h1>Hello from Express !</h1>');

});

```
## Body parser

•	Using body Parser as 

```JavaScript
app.use('/product',(req,res,next)=>{
console.log(req.body);
res.redirect('/');
```
this console.log gives `undefined`.

For that we use a third-party module install and use like
```JavaScript
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
```

what this does is it registers a middleware , so this function in the end just yields us such a middleware function, so this parser such a function here in the end even though we can’’t see it and this package will in the , in thus middleware function call next in the end , so that the request also reaches our middleware, it will do that whole body parsing we had to do manually in the previous core sections. Now this will not parse all kinds of possible bodies, files, and so on this will parse bodies 
but 

```JavaScript
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
```
this middleware executes noy just for post request but also for get request. instead of app.use() we can use app.get() or app.post()

```JavaScript
app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');

});
```
to send an error message to other paths

```JavaScript
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})
```
where 404 is use to not found paths 

## File Paths and Routing

`res.sendFile('/views/shop.html');`
Though I added this to join the html codes with JS files it did not work. for that we should use in here, we send a file where we create a path with the help of this module by calling the join method. Join yields us a path at the end, it returns a path, but it constructs this path by concatenating the different segments.

•	1st argument => should pass here is then actually a global variable made available by nodejs. (__is important) `__dirname` =>this is a global variable which simply holds the absolute path on our operating system to this project folder and now we can use above path

•	2nd argument => `views`

•	3rd argument => `shop.html/ …`

`const path = require('path');`

•	Do not use slash(‘/’) here because we use path join not because of the absolute path, this will automatically build the path in a way that works on both Linux and Windows system ,because you might know the paths. Dir name gives us the path to a file in which we use it and we are using it in the shop.js file in the route folder

```JavaScript
router.get('/',(req,res,next) =>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
});
```

The bellow method is more better to use 

`module.exports = path.dirname(process.mainModule.filename);`









