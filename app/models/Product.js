
var mongoose = require('mongoose');
const Color = require('./Color');
const Size = require('./Size');
var Schema = mongoose.Schema;

var Product = new Schema({
    productName: String,
    size: Size,
    color: Color,
    stamp: String,
    description: String,
    isStampCutted: Boolean,
    price: Number
});

module.exports = mongoose.model('Product', Product);
