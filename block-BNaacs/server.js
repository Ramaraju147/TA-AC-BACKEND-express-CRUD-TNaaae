const express = require('express');
const path = require('path');

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/', (req,res) => {
    res.locals.name = 'Rohan'
    res.render('home')
})

app.listen('4000',() => {
    console.log('Server is listening on port 4000')
})