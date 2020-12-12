const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tvSchema = new Schema({
    img: String,
    name: String,
    color: String,
    model: String,
    model_year: String,
    resolution: String,
    refresh_rate: Number,
    screen_size: Number,
    display: String,
    sound: String,
    warranty: String,
    price: Number,
});
//iN Exports line third 'users' is the collection name in our database and firs user is the name by which we are calling
module.exports = mongoose.model('tv', tvSchema, 'Telivisions');