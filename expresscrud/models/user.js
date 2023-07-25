const mongoose=require("mongoose")
const user=new mongoose.Schema({
    // username:String,
    username:{
        type:String,
        required:true
    },
    email:String,
    // mobile:Number
    mobile:{
        type:Number
    }
})
module.exports=mongoose.model('user',user)