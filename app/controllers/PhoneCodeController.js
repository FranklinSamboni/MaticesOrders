const phoneCodeService = require("../services/PhoneCodeService");
const utils = require("../utils/utils");

module.exports.getAvailablePhoneCodes = function (req, res) {
    
    return phoneCodeService.getPhoneCodes()
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.savePhoneCode = function (req, res) {
    
    return phoneCodeService.savePhoneCode(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.deletePhoneCode = function (req, res) {
    
    return phoneCodeService.deletePhoneCode(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};