
var mongoose = require('mongoose');
const IdentificationType = require('./IdentificationType');
const PhoneCode = require('./PhoneCode');
var Schema = mongoose.Schema;

var Client = new Schema({
    name: String,
    lastName: String,
    identificationNumber: String,
    identificationType: Object,
    phoneCode: Object,
    phone: String,
    city: String,
    address: String
});

module.exports = mongoose.model('Client', Client);
