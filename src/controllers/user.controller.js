const express = require('express');
const userModel = require('../models/user.model')

const router = express()


router.post("/signin", async ( req, res ) => {
    try{
      const User = await userModel.create(req.body);
      return res.json({status: "success"})
    }catch(err){
       return await res.send(err)
    }
})


router.post("/login", async (req, res)  =>{
  try{
     const User = await userModel.findOne( { email : req.body.email});
     if(User){
      const result = req.body.password === User.password;
       if(result){
        return res.send(User)
       }else{
        return res.send({error : "Wrong Password"})
       }
     }else{
      return res.send({error : "user doesn't exist"})
     }
  }
  catch(err){
     return  res.send(err.message)
  }
})

module.exports = router;