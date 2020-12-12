const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const watchSchema = new Schema({
    dial_color: String,
    img: String,
    name: String,
    band_size: String,
    case_size : String,
    leather_color: String,
    water_resistant: String,
    price: Number
});
//iN Exports line third 'users' is the collection name in our database and firs user is the name by which we are calling
module.exports = mongoose.model('watch', watchSchema, 'watches');