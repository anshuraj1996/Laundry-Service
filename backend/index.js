const express=require('express');
const app=express();
var cors = require('cors');

app.use(express.urlencoded({extended:true}));

app.use(cors({origin:'*'}));

const bodyparser=require('body-parser');
app.use(bodyparser());
const dotenv=require('dotenv');
dotenv.config();
const jwt =require('jsonwebtoken');

const User=require('./model/Users');
const Orders=require('./model/orders')


const userroutes=require('./routes/User');
const order=require('./routes/orders');

const secret="RESTAPI";
require('./database/databaseconnection');
// app.get('/',(req,res)=>{
//     return res.send("hello world");
// })

app.use("/orders",(req, res, next) =>{
    try{
        const token=req.headers.authorization.split("test ")[1];
    console.log(token);
    if(!token){
        return res.json({
            status:"failed",
            message:"Token not authenticated"
        })
    }
    jwt.verify(token, secret, async function(err, decoded) {
        console.log(err,decoded);
        if(err){
            return res.json({
                status:"failed",
                message:"Invalid token"
            })
        }
        const user=await User.findOne({_id:decoded.data});
        console.log(user);
        req.user=user._id; 
      });
    }catch(e){
        res.status(400).json({
            status:"failed",
            message:"Token not authenticated"
        })

    }
    next();
  });


app.use('/',userroutes);
app.use('/',order);


app.listen(process.env.PORT,()=>{
    console.log(`serve is running at ${process.env.PORT}`);
});