
var mongoose = require('mongoose');
const Client = require('./client');
var Schema = mongoose.Schema;

var Order = new Schema({
    status: String,
    dateCreated: BigInt,
    dateSent: BigInt,
    client: Client,
    products: String,
    shipper: String
});

module.exports = mongoose.model('Order', Order);
