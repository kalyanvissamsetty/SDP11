const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const handbagsSchema = new Schema({
    material: String,
    img: String,
    name: String,
    color: String,
    type: String,
    price: Number,
    pattern: String,
    sling_bag: String
});
module.exports = mongoose.model('handbags', handbagsSchema, 'handbags');