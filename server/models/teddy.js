const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teddySchema = new Schema({
    img: String,
    name: String,
    color : String,
    height: Number,
    material: String,
    washable: String,
    weight : String,
    features: String,
    price: Number
});
//iN Exports line third 'users' is the collection name in our database and firs user is the name by which we are calling
module.exports = mongoose.model('teddy', teddySchema, 'teddy_bears');