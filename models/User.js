const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
       
    },
    phone:{
        type:String,
      
    },
    email:{
        type:String,
       
        unique:true
    },
    username:{
        type:String,
     
    },
    password:{
        type:String,
      
    },
    profileimage:{
        type: String
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    }
 


}, {timestamps:true});

module.exports = mongoose.model('User',userSchema);