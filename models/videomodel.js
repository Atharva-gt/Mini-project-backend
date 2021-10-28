const mongoose = require('../connection');

const schema = new mongoose.Schema({
    
    title : String,
    discription : String,
    category : String,
    thumbnail : String,
    file : String,
    created : {type:Date ,default:new Date()}
    
})

const model = mongoose.model('video', schema);

module.exports = model;