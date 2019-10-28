const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');   
require('dotenv/config');

app.use(bodyParser.json());



//import routes

const postsRoute = require('./routes/posts');
const compRoute = require('./routes/competition')

app.use('/posts' , postsRoute);
app.use('/competition' , compRoute);


//connect db

mongoose.connect(process.env.DB_CONNECT, 
{ useNewUrlParser: true, useUnifiedTopology: true },
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

app.listen(5000);