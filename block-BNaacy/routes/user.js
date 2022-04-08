const express = require('express');
const router = express.Router();
const userModel = require('../models/user')

router.post('/',(req,res)=>{
console.log(req.body);
userModel.create(req.body,(err,response) => {
    if(err){
        res.redirect('users/new')
    }
    res.json(response);
})
})

router.get('/new',(req,res) => {
    res.render('userForm')
})

module.exports = router;