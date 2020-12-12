const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const homeappSchema = new Schema({
    model_name: String,
    img: String,
    name: String,
    color: String,
    sold_by : String,
    price: Number,
    width: String,
    height: String,
    depth: String,
    weight: Number
});
module.exports = mongoose.model('homeapp1', homeappSchema, 'Home_Appliances');