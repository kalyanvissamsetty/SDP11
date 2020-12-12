const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accessoriesSchema = new Schema({
    material: String,
    img: String,
    name: String,
    color: String,
    type: String,
    width: Number,
    height: Number,
    price: Number,
});
//iN Exports line third 'users' is the collection name in our database and firs user is the name by which we are calling
module.exports = mongoose.model('accessories', accessoriesSchema, 'mobile_accessories');