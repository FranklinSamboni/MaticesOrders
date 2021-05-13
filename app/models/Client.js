
var mongoose = require('mongoose');
const IdentificationType = require('./IdentificationType');
const PhoneCode = require('./PhoneCode');
var Schema = mongoose.Schema;

var Client = new Schema({
    name: String,
    lastName: String,
    identificationNumber: String,
    identificationType: { type: mongoose.Schema.Types.ObjectId, ref: 'IdentificationType', autopopulate: true },
    phoneCode: { type: mongoose.Schema.Types.ObjectId, ref: 'PhoneCode', autopopulate: true },
    phone: String,
    city: String,
    address: String
});

Client.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Client', Client);
