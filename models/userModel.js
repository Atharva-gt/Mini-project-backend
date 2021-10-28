const mongoose = require('../connection');

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number
})


const model = mongoose.model('user', schema);

module.exports = model;