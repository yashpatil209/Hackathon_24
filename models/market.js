const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const marketSchema = new Schema ({
    rice : {
        type : Number,
        required : true,
    },
    gahu : {
        type : Number,
        required : true,
    },
    bajri : {
        type : Number,
        required : true,
    },
    jwari : {
        type : Number,
        required : true,
    },
    vatana : {
        type : Number,
        required : true,
    },
    udit:{
        type : Number,
        required : true,
    },
    harbhara:{
        type : Number,
        required : true,
    },
    makka:{
        type : Number,
        required : true,
    },
    moong:{
        type : Number,
        required : true,
    },
    masoore:{
        type : Number,
        required : true,
    },



    batata:{
        type : Number,
        required : true,
    },
    kande:{
        type : Number,
        required : true,
    },
    mirchi:{
        type : Number,
        required : true,
    },
    vange:{
        type : Number,
        required : true,
    },
    palak:{
        type : Number,
        required : true,
    },
    methi:{
        type : Number,
        required : true,
    },


    peru:{
        type : Number,
        required : true,
    },
    amba:{
        type : Number,
        required : true,
    },
    tarbuj:{
        type : Number,
        required : true,
    },
    santri:{
        type : Number,
        required : true,
    },
    ananas:{
        type : Number,
        required : true,
    },






    fill:{
        type : String,
        default : true,
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : "user",
    }
});

const Market = mongoose.model('market' , marketSchema );
module.exports = Market;