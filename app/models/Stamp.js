var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Stamp = new Schema({
    name: String,
    image: String
});

Stamp.index({name: 1}, { unique:true });
module.exports = mongoose.model('Stamp', Stamp);