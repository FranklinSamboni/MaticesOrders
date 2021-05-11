
const identificationTypeRepository = require("../repositories/IdentificationTypeRepository");

module.exports.getIdentificationTypes = function () {
    return identificationTypeRepository.getAll();
};

module.exports.saveIdentificationType = function (body) {
    return isValidIdentificationType(body).then((identificationType) => {
        return identificationTypeRepository.saveIdentificationType(identificationType)
    });
};

module.exports.deleteIdentificationType = function (body) {
    let typeId = body.typeId;
    if (typeId) {
        const idType = {
            typeId: body.typeId
        };
        return identificationTypeRepository.deleteIdentificationType(idType);
    } else {
        return new Promise((resolve, reject) => {
            reject({
                statusCode: 400,
                message: "'typeId' field is required",
            });
        });
    }
};


function isValidIdentificationType(body) {
    return new Promise((resolve, reject) => {
        let typeId = body.typeId;
        let name = body.name;
        var identificationType = {}
        if (!name) {
            reject({
                statusCode: 400,
                message: "'name' field is required",
            });
        } else if (!typeId) {
            reject({
                statusCode: 400,
                message: "'typeId' field is required",
            });
        } else {
            identificationType.typeId = body.typeId
            identificationType.name = body.name
            resolve(identificationType)
        }
    }); 
}