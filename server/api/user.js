'use strict'
var DB = require('../db/userModel')

const bcrypt = require('bcryptjs');

let signUp = (req, res)=>{
    console.log(req.body)
    if(req.body.userName == null || req.body.userName == undefined || req.body.password == null || req.body.password == undefined || req.body.email == undefined || req.body.email == null ){
        return res.send({status:false, message:"Please Provide All Required Information"})
    }else{
        DB.user.findOne({email:req.body.email}).then((USER)=>{
            console.log("=========999",USER)

            if(USER){
                // console.log(USER)
                return res.send({status:false, message:"Email Is already registered"})
            }
            else{
                                bcrypt.hash(req.body.password, 10).then(function(hash) {
                                    var user = new DB.user ({
                                        userName: req.body.userName,
                                        email: req.body.email,
                                        password: hash,
                                      
                                        
                                    })
                                  
                                    user.save().then((saved)=>{
                                        if(!saved){
                                            return res.send({status:false, message:"Technical Error"})
                    
                                        }else{
                                         
        
                                            return res.send({status:true, message:"Registration Successfull"})
  
                    
                                        }
                                    })
                    
                                })
                           
                    
                    
              
               
            }
        })
   
}
}

let loginUser = (req,res)=>{
    console.log("====itegrated",req.body)
    if(req.body.email == null || req.body.email == undefined || req.body.password == undefined || req.body.password == null){
              return res.send({status:false, message:"Please provide All Informatio"})
    }
    else{
        DB.user.findOne({email:req.body.email}).then((user)=>{
            if(!user){
                return res.send({status:false, message:"User Not Found Please Register"})

            }
          
            else{
              
         
                bcrypt.compare(req.body.password, user.password, function(err, response) {
                    if(err){
                    return    res.send({status:false, message:"Please Try After Some Time"})
                    }else if(response == true){
                        const token = user.generateJwt()
                      return  res.send({status:true, message:"Login SucessfullY", usertoken:token, user:true})
                    }
                    else{

                      return  res.send({status:false, message:"Please Enter Correct Password"})
                    }
                });
          
            
        }
        })
    }
}


module.exports = {signUp, loginUser}