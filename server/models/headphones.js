const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const headSchema = new Schema({
    img: String,
    name: String,
    color: String,
    microphone_type: String,
    wireless : String,  
    price: Number,
    bluetooth : Number,
    battery: Number,
    features: String,
    water_resistance: String,
    drivers: Number,
    warranty: String,
});
module.exports = mongoose.model('hphone', headSchema, 'headphones');