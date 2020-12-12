const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sunglassesSchema = new Schema({
    img: String,
    name: String,
    size: String,
    color : String,
    type : String,
    shape: String,
    face_type: String,
    lens_color: String,
    lens_material: String,
    frame_color: String,
    frame_material: String,
    warranty : String,
    price: Number
});
//iN Exports line third 'users' is the collection name in our database and firs user is the name by which we are calling
module.exports = mongoose.model('spects', sunglassesSchema, 'sunglasses');