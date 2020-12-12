const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topsSchema = new Schema({
    fabric: String,
    img: String,
    name: String,
    size: String,
    type : String,
    neck: String,
    caution: String,
    pattern : String,
    color : String,
    price: Number
});
//iN Exports line third 'users' is the collection name in our database and firs user is the name by which we are calling
module.exports = mongoose.model('tops', topsSchema, 'tops');