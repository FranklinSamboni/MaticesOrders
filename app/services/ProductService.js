
const productRepository = require("../repositories/ProductRepository");
const sizeRepository = require("../repositories/SizeRepository");
const colorRepository = require("../repositories/ColorRepository");

module.exports.getProducts = function () {
    return productRepository.getAll();
};

module.exports.getProductById = function (params) {
    let id = params.id;
    if (id) {
        return productRepository.getById(id);
    } else {
        return Promise.reject({ statusCode: 400, message: "'id' field is required" });
    }
};

module.exports.addProduct = function (body) {
    return isValidProduct(body)
        .then(product => {
            return productRepository.createProduct(product);
        });
};

module.exports.updateProduct = function (body) {

    return isValidProduct(body)
        .then(product => {
            let id = body._id;
            if (!id) {
                return Promise.reject({ statusCode: 400, message: "'_id' field is required" });
            } else {
                var update = {};
                update._id = id;

                if (product.name) update.name = product.name;
                if (product.size) update.size = product.size;
                if (product.color) update.color = product.color;
                if (product.stamp) update.stamp = product.stamp;
                if (product.description) update.description = product.description;
                if (product.price) update.price = product.price;

                if (typeof product.isStampCutted === "boolean") {
                    update.isStampCutted = product.isStampCutted;
                }
                return productRepository.updateProduct(update);
            }
        });
};

module.exports.deleteProduct = function (body) {
    let id = body._id;
    if (id) {
        const product = {
            _id: body._id
        };
        return productRepository.deleteProduct(product);
    } else {
        return new Promise((resolve, reject) => {
            reject({
                statusCode: 400,
                message: "'_id' field is required",
            });
        });
    }
};


async function isValidProduct(body) {

    const product = {};

    if (!body.name) {
        return Promise.reject({ statusCode: 400, message: "'name' field of product is required" });
    }
    if (!body.stamp) {
        return Promise.reject({ statusCode: 400, message: "'stamp' field of product is required" });
    }
    if (body.isStampCutted && typeof body.isStampCutted !== "boolean") {
        return Promise.reject({ statusCode: 400, message: "'isStampCutted' cannot be read, be sure is boolean type" });
    }
    if (body.price && typeof body.price !== "number") {
        return Promise.reject({ statusCode: 400, message: "'number' cannot be read, be sure is number type" });
    }
    if (body.size) {
        var sizeFound = await sizeRepository.getByName(body.size);
        if (!sizeFound) {
            return Promise.reject({ statusCode: 400, message: "the 'size' provided was not found" });
        } else {
            product.size = sizeFound._id;
        }
    }
    if (body.color) {
        var colorFound = await colorRepository.getByName(body.color);
        if (!colorFound) {
            return Promise.reject({ statusCode: 400, message: "the 'color' provided was not found" });
        } else {
            product.color = colorFound._id;
        }
    }

    product.name = body.name;
    product.stamp = body.stamp;
    product.description = body.description ? body.description : "";
    product.price = body.price ? body.price : null;

    if (typeof body.isStampCutted === "boolean") {
        product.isStampCutted = body.isStampCutted;
    }
    
    return Promise.resolve(product);
};