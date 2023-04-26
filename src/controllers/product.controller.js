const express = require('express');
const productModel = require('../models/product.model');

const router = express();



router.post("", async (req,res) => {
    try{
       const product = await productModel.create(req.body);
       return res.json(product)
    } catch(err){
       return await res.send(err)
    }
 })

 router.put("/:id", async (req,res) => {
    try{
       const product = await productModel.findByIdAndUpdate(req.params.id, req.body);
       return res.json({status: 'updated', data: product})
    } catch(err){
       return await res.send(err)
    }
 })

 router.get("", async (req,res) => {
    try{
       const product = await productModel.find();
       return await res.send(product)
    } catch(err){
       return await res.send(err)
    }
 })

 router.get("/:id", async (req,res) => {
    try{
       const product = await productModel.findById(req.params.id);
       return await res.send(product)
    } catch(err){
       return await res.send(err)
    }
 })

 router.delete("/:id", async (req,res) => {
    try{
       const product = await productModel.findByIdAndDelete({_id:req.params.id});
       return res.send({status: "deleted", data: product})
    } catch(err){
       return await res.send(err)
    }
 })


module.exports = router;