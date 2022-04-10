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

router.get('/', (req,res) => {
   let users = userModel.find({},(err,users) => {
        if(err) next(err);
        res.render('users',{users})
    })
})

router.get('/:id',(req,res) => {
    let id = req.params.id;
    let user = userModel.findById(id,(err,user) => {
        if(err) next(err);
        res.render('user',{user})
    })
})

module.exports = router;