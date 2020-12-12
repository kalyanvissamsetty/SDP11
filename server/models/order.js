const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  
    img: String,
    name: String,
    email: String,
    price: Number,
    quantity: Number,
});
//iN Exports line third 'users' is the collection name in our database and firs user is the name by which we are calling
module.exports = mongoose.model('order', orderSchema, 'orders');