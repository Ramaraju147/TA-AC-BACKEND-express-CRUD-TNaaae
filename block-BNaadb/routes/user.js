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
   userModel.find({},(err,users) => {
        if(err) next(err);
        res.render('users',{users})
    })
})

router.get('/:id',(req,res) => {
    let id = req.params.id;
    userModel.findById(id,(err,user) => {
        if(err) next(err);
        res.render('user',{user})
    })
})

router.get('/:userId/edit', (req,res) => {
    let userId = req.params.userId;
    userModel.findById(userId, (err,user) => {
        if(err) next(err);
        res.render('editUser',{user})
    })
})

router.get('/:userId/delete', (req,res) => {
    let userId = req.params.userId;
    userModel.findByIdAndDelete(userId, (err,user) => {
        if(err) next(err);
        res.redirect('/users')
    })
})

router.post('/:id', (req,res) => {
    let id = req.params.id;
    userModel.findOneAndUpdate(id, req.body, (err,user) => {
        if(err) next(err);
        res.redirect('/users/'+id)
    })
})

module.exports = router;