const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menSchema = new Schema({
    img: String,
    name: String,
    fabric: String,
    sleeve: String,
    pattern : String,
    color: String,
    price: Number,
});
//iN Exports line third 'users' is the collection name in our database and firs user is the name by which we are calling
module.exports = mongoose.model('men', menSchema, 'mens_fashion');