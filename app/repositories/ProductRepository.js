const { ObjectId } = require("bson");
const Product = require("../models/Product");

module.exports.getAll = function () {
    return Product.find({});
};

module.exports.getById = function (id) {
    return Product.findOne({ _id: new ObjectId(id) });
};

module.exports.updateProduct = function (update) {
    var query = { _id: new ObjectId(update._id) };
    var options = { new: true };
    return Product.findOneAndUpdate(query, update, options).then(savedProduct => {
        if (!savedProduct) {
            return Promise.reject({ statusCode: 400, message: "Product not found" });
        } else {
            return savedProduct;
        }
    });
};

module.exports.createProduct = function (product) {
    return Product.create(product);
};

module.exports.deleteProduct = function (product) {
    var query = { _id: new ObjectId(product._id) };
    return Product.findOneAndDelete(query).populate('size').populate('color');
};

module.exports.deleteAllProduct = function (productsIds) {
    var query = { _id: { $in: productsIds } };
    return Product.deleteMany(query);
};
