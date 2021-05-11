
const productRepository = require("../repositories/ProductRepository");
const sizeRepository = require("../repositories/SizeRepository");
const colorRepository = require("../repositories/ColorRepository");

/*
module.exports.getClients = function () {
    return clientRepository.getAll();
};

module.exports.getClientById = function (params) {
    let id = params.id;
    if (id) {
        return clientRepository.getById(id);
    } else {
        return new Promise((resolve, reject) => {
            reject({
                statusCode: 400,
                message: "'id' field is required",
            });
        });
    }

};

module.exports.saveClient = function (body) {

    return isValidClient(body)
        .then(client => {
            let id = body._id;
            if (id) {
                var update = {};
                update._id = id;
                if (client.name) update.name = client.name;
                if (client.lastName) update.lastName = client.lastName;
                if (client.identificationType) update.identificationType = client.identificationType;
                if (client.identificationNumber) update.identificationNumber = client.identificationNumber;
                if (client.phoneCode) update.phoneCode = client.phoneCode;
                if (client.phone) update.phone = client.phone;
                if (client.city) update.city = client.city;
                if (client.address) update.address = client.address;

                return clientRepository.updateClient(update);
            } else {
                return clientRepository.saveClient(client);
            }
        });

};

module.exports.deleteClient = function (body) {
    let id = body._id;
    if (id) {
        const client = {
            _id: body._id
        };
        return clientRepository.deleteClient(client);
    } else {
        return new Promise((resolve, reject) => {
            reject({
                statusCode: 400,
                message: "'_id' field is required",
            });
        });
    }
};

function isValidClient(body) {
    return new Promise((resolve, reject) => {
        const client = {};

        if (!body.name) {
            reject({ statusCode: 400, message: "'name' field is required" });
        } else if (!body.phone) {
            reject({ statusCode: 400, message: "'phone' field is required" });
        } else {

            client.name = body.name;
            client.lastName = body.lastName ? body.lastName : "";
            client.identificationNumber = body.identificationNumber ? body.identificationNumber : "";
            client.phone = body.phone ? body.phone : "";
            client.city = body.city ? body.city : "";
            client.address = body.address ? body.address : "";

            if (body.identificationType || body.phoneCode) {

                var promises = [];
                if (body.identificationType) promises.push(identificationTypeRepository.getById(body.identificationType));
                if (body.phoneCode) promises.push(phoneCodeRepository.getByCode(body.phoneCode));

                Promise.all(promises).then(values => {

                    var idTypeFound = body.identificationType ? values[0] : null;
                    var phoneCodeFound = body.identificationType && body.phoneCode ? values[1] : body.phoneCode ? values[0] : null;

                    if (body.identificationType && !idTypeFound) {
                        reject({ statusCode: 400, message: "'identificationType' not found" });
                        return;
                    } else {
                        client.identificationType = idTypeFound;
                    }
                    
                    if (body.phoneCode && !phoneCodeFound) {
                        reject({ statusCode: 400, message: "'phoneCode' not found" });
                        return;
                    } else {
                        client.phoneCode = phoneCodeFound;
                    }
                    resolve(client);
                }).catch(errors => {
                    reject({ statusCode: 400, message: errors });
                });
            } else {
                resolve(client);
            }

        }
    });
}*/