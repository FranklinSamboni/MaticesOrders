
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
    name: String,
    size: { type: mongoose.Schema.Types.ObjectId, ref: 'Size', autopopulate: true },
    color: { type: mongoose.Schema.Types.ObjectId, ref: 'Color', autopopulate: true },
    stamp: String,
    description: String,
    isStampCutted: Boolean,
    price: Number
});

Product.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Product', Product);
