const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
    

module.exports = () =>{
    return mongoose.connect('mongodb+srv://meesho:meesho321@cluster0.wyyjrfa.mongodb.net/?retryWrites=true&w=majority')
}
