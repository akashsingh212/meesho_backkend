const mongoose = require("mongoose");

const product = new mongoose.Schema({
    image : {type: String, required : true},
    price : { type: Number, required : true},
    title : {type: String, required : true},
    detail : {type : Object, required : true},
    category : {type : String, required: true}
    
},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('products',product)