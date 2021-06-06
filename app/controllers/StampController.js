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

module.exports.saveStamp = function (req, res) {
    
    return stampService.saveStamp(req.body)
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