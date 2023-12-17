const express = require('express');

const router = express.Router();
/*this router is like a mini express app tried to the other express app
or pluggable into the other express app
 */
router.get('/add-product',(req,res,next) =>{
    //console.log('In another middleware!');
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"/><button type="submit">Add product</button></form>');

});
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');

});
module.exports = router;