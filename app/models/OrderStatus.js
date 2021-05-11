
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderStatus = new Schema({
    name: String,
});

OrderStatus.index({name: 1}, { unique: true });
module.exports = mongoose.model('OrderStatus', OrderStatus);
