const { ObjectId } = require("bson");
const Order = require("../models/Order");

module.exports.getAll = function () {
    return Order.find({});
}

module.exports.getById = function (id) {
    return Order.findOne({ _id: new ObjectId(id) });
}

module.exports.updateOrder = function (update) {
    var query = { _id: new ObjectId(update._id) };
    return Order.findOneAndUpdate(query, update).then(savedOrder => {
        if (!savedOrder) {
            Promise.reject({ statusCode: 400, message: "Order not found" });
        } else {
            return savedOrder;
        }
    });
}

module.exports.createOrder = function (order) {
    return Order.create(order);
}

module.exports.deleteOrder = function (order) {
    var query = { _id: new ObjectId(order._id) };
    return Order.findOneAndDelete(query);
}

module.exports.addProductToOrder = function (order, product) {
    const query = { _id: new ObjectId(order._id) };
    const update = { $push: { products: product } };
    return Order.findOneAndUpdate(query, update);
}

module.exports.deleteProductFromOrder = function (order, product) {
    const query = { _id: new ObjectId(order._id) };
    const update = { $pull: { products: [ new ObjectId(product._id) ] } };
    return Order.findOneAndDelete(query, update);
}
