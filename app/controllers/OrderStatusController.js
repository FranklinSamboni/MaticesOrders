const orderStatusService = require("../services/OrderStatusService");
const utils = require("../utils/utils");

module.exports.getOrderStatus = function (req, res) {
    
    return orderStatusService.getOrderStatus()
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.saveOrderStatus = function (req, res) {
    
    return orderStatusService.saveOrderStatus(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.deleteOrderStatus = function (req, res) {
    
    return orderStatusService.deleteOrderStatus(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};