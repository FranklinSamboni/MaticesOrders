const sizeService = require("../services/SizeService");
const utils = require("../utils/utils");

module.exports.getAvailableSizes = function (req, res) {
    
    return sizeService.getAvailableSizes()
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.saveSize = function (req, res) {
    
    return sizeService.saveSize(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.deleteSize = function (req, res) {
    
    return sizeService.deleteSize(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};