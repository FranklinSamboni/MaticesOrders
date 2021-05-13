const productService = require("../services/ProductService");
const utils = require("../utils/utils");

module.exports.getProducts = function (req, res) {
    
    return productService.getProducts()
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.getProductById = function (req, res) {
    
    return productService.getProductById(req.params)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.addProduct = function (req, res) {

    return productService.addProduct(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.updateProduct = function (req, res) {

    return productService.updateProduct(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.deleteProduct = function (req, res) {
    
    return productService.deleteProduct(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};