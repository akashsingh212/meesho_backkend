const express = require('express');
const connect = require('./src/config/db');
const products = require("./src/controllers/product.controller")
const users = require('./src/controllers/user.controller')
const cart = require("./src/controllers/cart.controller")
const app = express();
const cors = require("cors")
const PORT = process.env.PORT || 5500;

app.use(cors({
    origin : "*",
    preflightContinue : "false"
}))
app.use(express.json());
app.use('/users', users);
app.use("/cart", cart )
app.use('/products',products);

app.get('', async (req,res) => {
   await res.send('hii there')
})

app.listen(PORT,async () => {
    try{
        await connect();
    }catch(err){
        console.log(err)
    }
    console.log('server is running')
})