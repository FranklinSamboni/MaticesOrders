const OrderStatus = require("../models/OrderStatus");

module.exports.getAll = function(){
    return OrderStatus.find({});
}

module.exports.saveOrderStatus = function (orderStatus) {
    var query = { name: orderStatus.name };
    var update = { name : orderStatus.name };
    var options = { upsert: true };
    return OrderStatus.findOneAndUpdate(query, update, options);
}

module.exports.deleteOrderStatus = function (orderStatus) {
    var query = { name: orderStatus.name };
    return OrderStatus.findOneAndDelete(query);
}
