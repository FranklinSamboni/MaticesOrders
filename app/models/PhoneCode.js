var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhoneCode = new Schema({
    code: String,
});

PhoneCode.index({code: 1}, { unique: true });
module.exports = mongoose.model('PhoneCode', PhoneCode);
