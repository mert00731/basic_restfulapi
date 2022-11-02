const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name:{
        type:String,
        required:[true,"name space cannot be empty"],
        trim:true,
        minlength:2,
        maxlength:30
    },
    content:{
        type:String,
        required:true,
        trim:true,
        minlength:2,
        maxlength:[30,"content should be maximum 30 characters"]
    },
    
    
},{collection:'datas',timestamps:true});


const Data = mongoose.model('datas',dataSchema);

module.exports = Data;