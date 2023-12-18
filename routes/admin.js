const express = require('express');
const path = require("path");

const rootDir = require('../util/path');

const router = express.Router();
/*this router is like a mini express app tried to the other express app
or pluggable into the other express app
 */
router.get('/add-product',(req,res,next) =>{
    //console.log('In another middleware!');
    //res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.sendFile(path.join(rootDir,'views','add-product.html'));

});
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');

});
module.exports = router;