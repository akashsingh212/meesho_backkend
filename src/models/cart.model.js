const mongoose = require("mongoose")


const cart = new mongoose.Schema({
    image : {type: String, required : true},
    price : { type: Number, required : true},
    title : {type: String, required : true},
    detail : {type : Object, required : true},
    userid: {type : String,  required : true}
},{
    versionKey: false,
    timestamps : true
})



module.exports = mongoose.model("cart", cart)