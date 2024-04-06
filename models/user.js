const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema ({
    name : {
        type : String ,
        required : true ,
    },
    email : {
        type : String ,
        required : true ,
    },
    phone : {
        type : Number,
        required : true,
    },
    role : {
        type : String,
        required : true,
    },
    state : { 
        type : String , 
        required : true,
    },
    dist : { 
        type : String , 
        required : true,
    },
    products :[{
        type : Schema.Types.ObjectId,
        ref : "item",
   }],
   market : {
        type : Schema.Types.ObjectId,
        ref : "item",
   }
});


// it will automatic insert username and password
userSchema.plugin(passportLocalMongoose); 

const User = mongoose.model('User' , userSchema );
module.exports = User;