const express = require('express');
const userModel = require('../models/user');

const router = express.Router();

router.post('/', (req,res) => {
userModel.create(req.body,(err,data) => {
    if(err) next(err)
    res.redirect('/users')
})
})

router.get('/', (req,res) => {
    userModel.find({}, (err,users) => {
        res.render('listUsers',{users})
    })
})

router.get('/:id', (req,res) => {
    userModel.findById(req.params.id, (err,user) => {
        res.render('singleUser',{user})
    })
})

router.put('/:id', (req,res) => {
    userModel.findByIdAndUpdate(req.params.id,req.body,(err,user) => {
        res.redirect('/users/'+ user._id)
    })
})

router.delete('/:id', (req,res) => {
    userModel.findByIdAndDelete(req.params.id, (err,user) => {
        res.redirect('/users')
    })
})

module.exports = router;