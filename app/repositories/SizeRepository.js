const Size = require("../models/Size");

module.exports.getAll = function(){
    return Size.find({});
}

module.exports.saveSize = function (size) {
    var query = { name: size.name };
    var update = { name : size.name };
    var options = { upsert: true };
    return Size.findOneAndUpdate(query, update, options);
}

module.exports.deleteSize = function (size) {
    var query = { name: size.name };
    return Size.findOneAndDelete(query);
}
