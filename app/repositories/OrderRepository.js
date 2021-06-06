const { ObjectId } = require("bson");
const Order = require("../models/Order");

module.exports.getAll = function () {
    return Order.find({}).sort({ dateCreated: 'desc' });;
};

module.exports.getById = function (id) {
    return Order.findOne({ _id: new ObjectId(id) });
};

module.exports.updateOrder = function (update) {
    var query = { _id: new ObjectId(update._id) };
    var options = { new: true };

    return Order.findOneAndUpdate(query, update, options).then(savedOrder => {
        if (!savedOrder) {
            return Promise.reject({ statusCode: 400, message: "Order not found" });
        } else {
            return savedOrder;
        }
    });
};

module.exports.createOrder = function (order) {
    return Order.create(order);
};

module.exports.deleteOrder = function (order) {
    var query = { _id: new ObjectId(order._id) };
    return Order.findOneAndDelete(query).populate('client').populate('products').populate('status');
};

module.exports.addProductToOrder = function (order, product) {
    const query = { _id: new ObjectId(order._id) };
    const update = { $push: { products: new ObjectId(product._id) } };
    const options = { new: true };
    return Order.findOneAndUpdate(query, update, options);
};

module.exports.deleteProductFromOrder = function (order, product) {
    const query = { _id: new ObjectId(order._id) };
    const update = { $pullAll: { products: [ new ObjectId(product._id) ] } };
    const options = { new: true };
    return Order.findOneAndUpdate(query, update, options);
};
