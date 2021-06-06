const Stamp = require("../models/Stamp");

module.exports.getAll = function(){
    return Stamp.find({}).sort({ name: 'asc' });
};

module.exports.getByName = function(name) {
    return Stamp.findOne({ name: name });
};

module.exports.saveStamp = function (stamp) {
    var query = { name: stamp.name };
    var update = stamp;
    var options = { upsert: true };
    return Stamp.findOneAndUpdate(query, update, options);
};

module.exports.deleteStamp = function (stamp) {
    var query = { name: stamp.name };
    return Stamp.findOneAndDelete(query);
};
