const express = require('express');

const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


//import routes

const postsRoute = require('./routes/posts');

app.use('/posts' , postsRoute);

//connect db

mongoose.connect(process.env.DB_CONNECT, 
{ useNewUrlParser: true },
()=> {
    console.log('connecting to db')
});

//Middlewares

app.use("/posts" , ()=>{
    console.log('hii');
});


// Routes


app.get("/",(req,res) =>{
    res.send("we are on home");
});


//

app.listen(3000);