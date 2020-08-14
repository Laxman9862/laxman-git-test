const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    food:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Food",
        
    
    }],
   
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        
    },
    
},{timestamps:true});

module.exports = mongoose.model('Cart',cartSchema);