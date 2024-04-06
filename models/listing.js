const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listSchema = new Schema ({
    name : {
        type : String ,
        required : true ,
    },
    desc : {
        type : String ,
        required : true ,
    },
    price : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : true,
    },
    quantity : {
        type  : String,
        required : true,
    },
    category : {
        type  : String,
        required : true,
    },
    date : {
        type : Date ,
        default : Date.now(),
    },
    owner:{
        type : Schema.Types.ObjectId,
        ref : "User",
    },
});

const Item = mongoose.model('item' , listSchema );
module.exports = Item;