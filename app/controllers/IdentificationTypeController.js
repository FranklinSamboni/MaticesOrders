const identificationTypeService = require("../services/IdentificationTypeService");
const utils = require("../utils/utils");

module.exports.getIdentificationTypes = function (req, res) {
    
    return identificationTypeService.getIdentificationTypes()
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.saveIdentificationType = function (req, res) {
    
    return identificationTypeService.saveIdentificationType(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.deleteIdentificationType = function (req, res) {
    
    return identificationTypeService.deleteIdentificationType(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};