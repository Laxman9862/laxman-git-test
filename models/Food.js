const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({
    foodname:{
        type:String,
     
    },
    foodimage:{
        type:String
    },
    price:{
        type:String,
     
    },
    category:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Foodcategory'
       
    }],
   
},{timestamps:true});

module.exports=mongoose.model('Food',foodSchema);