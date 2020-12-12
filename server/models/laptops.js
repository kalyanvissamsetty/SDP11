
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const laptopsSchema = new Schema({
    img: String,
    name: String,
    design: String,
    display: String,
    price: Number,
    ram: String,
    storage : String,
    processor: String,
    battery: String,
    audio: String,
    webcam: String,

});
module.exports = mongoose.model('laptops', laptopsSchema, 'laptops');