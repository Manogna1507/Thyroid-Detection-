const mongoose =require ('mongoose')
const logi = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type :String,
        required:true,
    },
    newPassword:{
        type:String,

    },
    otp:{
        type:String,
    }
});
const login= mongoose.model('login',logi)
module.exports=login