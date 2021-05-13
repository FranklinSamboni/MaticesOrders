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