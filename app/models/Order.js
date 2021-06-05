
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Order = new Schema({
    status: { type: mongoose.Schema.Types.ObjectId, ref: 'OrderStatus', autopopulate: true },
    dateCreated: Number,
    dateSent: Number,
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', autopopulate: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', autopopulate: true }],
    shipper: String,
    shippingAddress: String
});

Order.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Order', Order);
