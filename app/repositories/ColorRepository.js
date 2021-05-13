const Color = require("../models/Color");

module.exports.getAll = function(){
    return Color.find({});
}

module.exports.getByName = function(name) {
    return Color.findOne({ name: name });
}

module.exports.saveColor = function (color) {
    var query = { name: color.name };
    var update = { name : color.name };
    var options = { upsert: true };
    return Color.findOneAndUpdate(query, update, options);
}

module.exports.deleteColor = function (color) {
    var query = { name: color.name };
    return Color.findOneAndDelete(query);
}
