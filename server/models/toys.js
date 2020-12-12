const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const toysSchema = new Schema({
    img: String,
    name: String,
    features: String,
    water_resistance : String,
    color : String,
    price: Number,
    battery: String,
    remote_control: String,
    material_type: String
});
//iN Exports line third 'users' is the collection name in our database and firs user is the name by which we are calling
module.exports = mongoose.model('toys', toysSchema, 'toys');