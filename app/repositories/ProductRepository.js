const { ObjectId } = require("bson");
const Product = require("../models/Product");

module.exports.getAll = function () {
    return Product.find({});
}

module.exports.getById = function(id) {
    return Product.findOne({ _id: new ObjectId(id) });
}

module.exports.updateProduct = function (update) {
    var query = { _id: new ObjectId(update._id) };
    return Product.findOneAndUpdate(query, update).then(savedProduct => {
        return new Promise((resolve, reject) => { 
            if (!savedProduct) {
                reject({ statusCode: 400, message: "Product not found" }); 
            } else {
                resolve(savedProduct);
            }
        });
    });
}

module.exports.saveProduct = function (product) {
    return Product.create(product);
}

module.exports.deleteProduct = function (product) {
    var query = { _id: new ObjectId(product._id) };
    return Product.findOneAndDelete(query);
}
