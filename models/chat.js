const mongoose = require('mongoose');

// hum ynha pr apna schema create kringe 
const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
     to:{
        type:String,
        required:true
    },
     msg:{
        type:String,
        maxLength:100,
        minLength:1
    },
     created_at:{
        type:Date,
        required:true
    },

});

const chat = mongoose.model("chats",chatSchema);

module.exports =chat ;