const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sportsSchema = new Schema({
    material: String,
    img: String,
    name: String,
    sold_by: String,
    size: String,
    price: Number,
    weight : Number,
    height : Number,
    width : Number,
    depth : Number
});
module.exports = mongoose.model('sports', sportsSchema, 'sports_items');