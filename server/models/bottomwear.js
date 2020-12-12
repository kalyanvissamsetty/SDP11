const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bottomwearSchema = new Schema({
    img: String,
    name: String,
    color: String,
    type: String,
    price: Number,
    caution: String,
    model : String,
    length: String,
    speciality: String
});
module.exports = mongoose.model('bottomwear', bottomwearSchema, 'bottomwear');