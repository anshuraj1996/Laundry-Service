const dotenv=require('dotenv');
dotenv.config();
const mongoose=require('mongoose');
const db=process.env.DATABASE;

mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('connection successfull')
}).catch((e)=>{
    console.log("no connection");

});

