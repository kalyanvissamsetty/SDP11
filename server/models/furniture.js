const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const furnitureSchema = new Schema({
    model_name: String,
    img: String,
    name: String,
    color: String,
    sold_by : String,
    cost: Number,
    width: Number,
    depth: Number,
    material: String,
    model_number: String,
    weight: Number
});
module.exports = mongoose.model('furn', furnitureSchema, 'Furniture');