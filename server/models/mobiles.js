const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mobileSchema = new Schema({
    processor: String,
    img: String,
    name: String,
    ram: Number,
    rom: Number,
    battery: Number,
    rear_camera: Number,
    front_camera: Number,
    price: Number,
});
//iN Exports line third 'users' is the collection name in our database and firs user is the name by which we are calling
module.exports = mongoose.model('mobile', mobileSchema, 'mobiles');