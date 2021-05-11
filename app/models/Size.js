var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Size = new Schema({
    name: String,
});

Size.index({name: 1}, {unique:true});
module.exports = mongoose.model('Size', Size);