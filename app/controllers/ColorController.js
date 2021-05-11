const colorService = require("../services/ColorService");
const utils = require("../utils/utils");

module.exports.getAvailableColors = function (req, res) {
    
    return colorService.getColors()
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.saveColor = function (req, res) {
    
    return colorService.saveColor(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.deleteColor = function (req, res) {
    
    return colorService.deleteColor(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};