const stampService = require("../services/StampService");
const utils = require("../utils/utils");

module.exports.getAll = function (req, res) {
    return stampService.getAll()
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
};

module.exports.createStamp = function (req, res) {
    
    return stampService.createStamp(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.updateStamp = function (req, res) {
    
    return stampService.updateStamp(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};


module.exports.deleteStamp = function (req, res) {
    
    return stampService.deleteStamp(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};