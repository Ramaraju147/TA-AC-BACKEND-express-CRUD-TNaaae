const express = require('express');
const path = require('path');

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs')

app.set('views',path.join(__dirname,'views'))

app.use('/users', require('./routes/users'))

app.listen('4000', () => {
    console.log("Server is listenning on port 4000")
})