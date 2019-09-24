const mongoose  = require('mongoose');
const otheruserschema = require('./otheruser');
const {commentsmodel ,CommentsSchema } = require('./Commments');
const imageschema = require('./Image');


const PostSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    likes:{
        type : Number,
        default:0,
    },

    owner:{
        type:[otheruserschema],
        required:true,
    },

    category :{
        enum :["cat1" , 'cat2'],
    },

    sharedby : {
        type : [otheruserschema],
    },

    sharedcount :{
        type: Number,
    },
    
    comments : {
        type : CommentsSchema,
    },

    imageurls: {
        type : [imageschema],
    },

})



module.exports = mongoose.model("Posts" , PostSchema);