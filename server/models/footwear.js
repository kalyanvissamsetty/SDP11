const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const footwearSchema = new Schema({
    sole: String,
    img: String,
    name: String,
    closure: String,
    type: String,
    price: Number,
    width: String,
    warranty_type: String,
    warranty_description: String,
    height: String
});
module.exports = mongoose.model('footwear', footwearSchema, 'footwear');