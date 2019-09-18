const mongoose  = require('mongoose');

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
    }

})



module.exports = mongoose.model("Posts" , PostSchema);