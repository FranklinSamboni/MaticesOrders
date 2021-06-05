const orderService = require("../services/OrderService");
const utils = require("../utils/utils");

module.exports.getOrders = function (req, res) {
    
    return orderService.getOrders()
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.getOrderById = function (req, res) {
    
    return orderService.getOrderById(req.params)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.deleteOrder = function (req, res) {
    
    return orderService.deleteOrder(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.addOrder = function (req, res) {
    
    return orderService.addOrder(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.updateOrder = function (req, res) {
    
    return orderService.updateOrder(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.addProductToOrder = function (req, res) {
    
    return orderService.addProductToOrder(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.deleteProductFromOrder = function (req, res) {
    
    return orderService.deleteProductFromOrder(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};