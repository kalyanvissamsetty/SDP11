const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const laptopbagsSchema = new Schema({
    material: String,
    img: String,
    name: String,
    color: String,
    type: String,
    price: Number,
    compartments: Number,
    pockets : Number,
    height: String
});
module.exports = mongoose.model('laptopbags', laptopbagsSchema, 'laptop_bags');