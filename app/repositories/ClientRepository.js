const { ObjectId } = require("bson");
const Client = require("../models/Client");

module.exports.getAll = function () {
    return Client.find({});
};

module.exports.getById = function(id) {
    return Client.findOne({ _id: new ObjectId(id) });
};

module.exports.updateClient = function (update) {
    var query = { _id: new ObjectId(update._id) };
    var options = { new: true };
    return Client.findOneAndUpdate(query, update, options).then(savedClient => {
        if (!savedClient) {
            return Promise.reject({ statusCode: 400, message: "Client not found" }); 
        } else {
            return savedClient;
        }
    });
};

module.exports.createClient = function (client) {
    return Client.create(client);
};

module.exports.deleteClient = function (client) {
    var query = { _id: new ObjectId(client._id) };
    return Client.findOneAndDelete(query);
};
