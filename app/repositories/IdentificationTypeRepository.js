const IdentificationType = require("../models/IdentificationType");

module.exports.getAll = function() {
    return IdentificationType.find({});
}

module.exports.getById = function(id) {
    return IdentificationType.findOne({ typeId: id });
}

module.exports.saveIdentificationType = function (identificationType) {
    var query = { typeId: identificationType.typeId};
    var update = { typeId : identificationType.typeId, name: identificationType.name };
    var options = { upsert: true };
    return IdentificationType.findOneAndUpdate(query, update, options);
}

module.exports.deleteIdentificationType = function (identificationType) {
    var query = { typeId : identificationType.typeId };
    return IdentificationType.findOneAndDelete(query);
}
