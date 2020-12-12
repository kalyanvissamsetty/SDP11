const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const speakerSchema = new Schema({
    img: String,
    name: String,
    color: String,
    wireless : String,
    price: Number,
    bluetooth : String,
    battery: String,
    features: String,
    portable: String,
    water_resistance: String,
    warranty: String,
});
module.exports = mongoose.model('speaker', speakerSchema, 'speakers');