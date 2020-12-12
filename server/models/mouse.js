const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mouseSchema = new Schema({
    technology: String,
    img: String,
    name: String,
    compatability: String,
    color: String,
    dpi: Number,
    buttons : Number,
    scroll: Number,
    warranty: Number,
    price: Number
});
//iN Exports line third 'users' is the collection name in our database and firs user is the name by which we are calling
module.exports = mongoose.model('mouse', mouseSchema, 'mouse');