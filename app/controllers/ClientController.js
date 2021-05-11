const clientService = require("../services/ClientService");
const utils = require("../utils/utils");

module.exports.getClients = function (req, res) {
    
    return clientService.getClients()
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.getClientById = function (req, res) {
    
    return clientService.getClientById(req.params)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.saveClient = function (req, res) {
    
    return clientService.saveClient(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.deleteClient = function (req, res) {
    
    return clientService.deleteClient(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};