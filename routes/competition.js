const express = require('express');

const router = express.Router();

const Competition  = require('../models/Competititons')


//get competitions
router.get("/", async  (req,res) =>{
    console.log(req.body);
    try {
        const competition = await Competition.find();
        console.log('abcd')
        res.json(competition);
       

    } catch (err){
        res.json({ message : err});
    }
});


