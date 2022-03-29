const express=require('express');
const app=express();
const router=express.Router();
const users=require('../model/Users');
const bodyparser=require('body-parser');
app.use(bodyparser());
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');

const secret="RESTAPI";

router.post('/signup',async(req,res)=>{
    try{

            const {name,email,phone,password,state,district,address,pincode}=req.body;  // destructuring
            const exist=await users.findOne({email});
            if(exist){
                return res.status(400).send('user already registered');
            }
            
            bcrypt.hash(password, 10, async function(err, hash) {
                try{
                    if(err){
                        console.log(err)
                        return res.status(401).json({
                            // status:"failed",
                            message:"Invalid data"
                        })
                    }else{
                        const user=await users.create({
                            name,
                            email,
                            phone,
                            password:hash,
                            state,
                            district,
                            address,
                            pincode
                        });
                        console.log(user)
                        return res.status(200).json({
                            // status:"success",
                            data:user
                        })
                    }
    
                
                // Store hash in your password DB.
         
                        }
                        catch(e){
                        res.status(403).json({
                            // status:"failed",
                            message:e.message
                        })
                        console.log('failed')
                    }
                });
        }

    catch(e){
        console.log(e);
        return res.status(500).send('server error');
    }
})




router.post('/login',async(req,res)=>{
    try{

        const{email,password}=req.body;  // phone

        const exist=await users.findOne({email});
        const id=exist._id
        if (!exist){
            return res.status(400).send('User not exist');
        }

        bcrypt.compare(password,exist.password, async function(err, result) {
            if(err){
                console.log(err)
                return res.status(401).json({
                    message:"Invalid crendentials"
                })

            }else{
                if(result){
                    const token=jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: exist._id
                      }, secret);
                      const user=await users.findOneAndUpdate({_id:id},{$set:{token:token}})
                    return res.status(200).json({
                        // status:"success",
                        data:user,
                        token:token
                    });
                    // return res.status(200).json({
                    //     id,
                    //     status: "success",
                    //     token:token
                    // });

                }
                }
        });
        // if(exist.phone!=phone){
        //     return res.status(400).status('User not exist');
        // }
        
        
    }catch(e){
        console.log(e);
        return res.status(500).send('server error');
    }
});

router.get('/fetchuser',async(req,res)=>{
    try{
        let allusers=await users.find();
        return res.json(allusers);
    }catch(e){
        console.log(e);
        return res.status(500).send('server error');
    }
})

module.exports=router;