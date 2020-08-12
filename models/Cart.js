const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    food:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Food",
        require:true
    
    }],
    totalprice:{

        type:Number
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    quanity : {
        type: Number
    }

},{timestamps:true});

module.exports = mongoose.model('Cart',cartSchema);