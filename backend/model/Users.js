const mongoose=require('mongoose');

const user= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    phone:{
        type:Number,
       
    },
    password:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true

    },
    district:{
        type:String,
        required:true

    },
    address:{
        type:String,
        required:true

    },
    pincode:{
        type:String,
        required:true

    },
    token:{
        type:String
    }

});

module.exports=mongoose.model('Users',user);
