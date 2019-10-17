var express= require('express');
var bodyparser=require('body-parser');
var app= express();
var cors = require('cors')
var db=require('./database/db');

app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use('/users', require('./api/userApi'));
app.use('/sujets', require('./api/sujetApi'));


app.listen(4000,()=>{
    console.log('Express server is connected on port 4000!');
});