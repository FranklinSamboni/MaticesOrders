const { ObjectId } = require("bson");
const Client = require("../models/Client");

module.exports.getAll = function () {
    return Client.find({});
}

module.exports.getById = function(id) {
    return Client.findOne({ _id: new ObjectId(id) });
}

module.exports.updateClient = function (update) {
    var query = { _id: new ObjectId(update._id) };
    return Client.findOneAndUpdate(query, update).then(savedClient => {
        return new Promise((resolve, reject) => { 
            if (!savedClient) {
                reject({ statusCode: 400, message: "Client not found" }); 
            } else {
                resolve(savedClient);
            }
        });
    });
}

module.exports.saveClient = function (client) {
    return Client.create(client);
}

module.exports.deleteClient = function (client) {
    var query = { _id: new ObjectId(client._id) };
    return Client.findOneAndDelete(query);
}
