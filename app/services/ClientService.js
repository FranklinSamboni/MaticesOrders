
const clientRepository = require("../repositories/ClientRepository");
const identificationTypeRepository = require("../repositories/IdentificationTypeRepository");
const phoneCodeRepository = require("../repositories/PhoneCodeRepository");

module.exports.getClients = function () {
    return clientRepository.getAll();
};

module.exports.getClientById = function (params) {
    let id = params.id;
    if (id) {
        return clientRepository.getById(id);
    } else {
        return Promise.reject({ statusCode: 400, message: "'id' field is required" });
    }
};

module.exports.addClient = function (body) {
    return module.exports.isValidClient(body)
        .then(client => {
            return clientRepository.createClient(client);
        });
};

module.exports.updateClient = function (body) {

    return module.exports.isValidClient(body)
        .then(client => {
            let id = body._id;
            if (!id) {
                return Promise.reject({ statusCode: 400, message: "'_id' field of client is required"});
            } else {
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
        return Promise.reject({ statusCode: 400, message: "'_id' field is required" });
    }
};

module.exports.isValidClient = async function isValidClient(body) {

    const client = {};

    if (!body.name) {
        return Promise.reject({ statusCode: 400, message: "'name' field of client is required" });
    }
    if (!body.phone) {
        return Promise.reject({ statusCode: 400, message: "'phone' field of client is required" });
    }
    if (body.identificationType) {
        var idTypeFound = await identificationTypeRepository.getById(body.identificationType);
        if (!idTypeFound) {
            return Promise.reject({ statusCode: 400, message: "the 'identificationType' provided was not found" });
        } else {
            client.identificationType = idTypeFound._id;
        }
    }
    if (body.phoneCode) {
        var phoneCodeFound = await phoneCodeRepository.getByCode(body.phoneCode);
        if (!phoneCodeFound) {
            return Promise.reject({ statusCode: 400, message: "the 'phoneCode' provided was not found" });
        } else {
            client.phoneCode = phoneCodeFound._id;
        }
    }

    client.name = body.name;
    client.lastName = body.lastName ? body.lastName : "";
    client.identificationNumber = body.identificationNumber ? body.identificationNumber : "";
    client.phone = body.phone;
    client.city = body.city ? body.city : "";
    client.address = body.address ? body.address : "";

    return Promise.resolve(client);
};