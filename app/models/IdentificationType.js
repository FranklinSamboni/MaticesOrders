var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IdentificationType = new Schema({
    typeId: String,
    name: String
});

IdentificationType.index({typeId: 1}, {unique: true});
module.exports = mongoose.model('IdentificationType', IdentificationType);