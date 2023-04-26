const express = require("express");
const cart = require("../models/cart.model");

const router = express();

router.post("", async(req,res) => {
    try{
       const Cartdata = await cart.create(req.body);
       return res.send({data: Cartdata})
    }catch(err){
        return res.send(err.message)
    }
})


router.get("/:id", async (req,res) => {
    try{
       const product = await cart.find({userid : req.params.id});
       return  res.send(product)
    } catch(err){
       return  res.send(err)
    }
 })

 router.delete("/:id", async (req,res) => {
    try{
       const product = await cart.findByIdAndDelete({_id:req.params.id});
       return res.send({status: "deleted", data: product})
    } catch(err){
       return await res.send(err)
    }
 })

 router.delete("/empty/:id", async (req,res) => {
   try{
      const product = await cart.deleteMany({userid:req.params.id});
      return res.send({status: "deleted", data: product})
   } catch(err){
      return await res.send(err)
   }
})

module.exports = router;