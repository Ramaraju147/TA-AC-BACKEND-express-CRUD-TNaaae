const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
res.render('users',{list:["Rohan","Raju","Janaki"]})
})

router.get('/new',(req,res) => {
    res.render('userForm')
})

router.get('/:id',(req,res) => {
    res.render('singleUser',{name:"Rohan",age: 21})
})

router.delete('/:id',(req,res) => {
    res.send('User Deleted')
})

router.post('/',(req,res) => {
    res.json(req.body)
})

module.exports = router;