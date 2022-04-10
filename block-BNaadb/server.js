const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/user',(err) => {
    console.log(err?err:"Successfully Connected to database");
})

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/users', userRouter);

app.listen('4000', () => {
    console.log('Server is listening on port 4000')
})