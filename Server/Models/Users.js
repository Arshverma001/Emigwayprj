const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    item:String,
    cost:Number
})

const UserModel=mongoose.model("users",UserSchema)
module.exports=UserModel