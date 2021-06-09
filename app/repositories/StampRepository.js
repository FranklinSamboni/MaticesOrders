const Stamp = require("../models/Stamp");
const { ObjectId } = require("bson");

module.exports.getAll = function(){
    return Stamp.find({}).sort({ name: 'asc' });
};

module.exports.getByName = function(name) {
    return Stamp.findOne({ name: name });
};

module.exports.getById = function(id) {
    return Stamp.findOne({ _id: new ObjectId(id) });
};

module.exports.updateStamp = function (update) {
    var query = { _id: new ObjectId(update._id) };
    var options = { new: true };
    return Stamp.findOneAndUpdate(query, update, options).then(savedStamp => {
        if (!savedStamp) {
            return Promise.reject({ statusCode: 400, message: "Stamp not found" });
        } else {
            return savedStamp;
        }
    });
};

module.exports.createStamp = function (stamp) {
    return Stamp.create(stamp);
};

module.exports.deleteStamp = function (stamp) {
    var query = { name: stamp.name };
    return Stamp.findOneAndDelete(query);
};
