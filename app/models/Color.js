var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Color = new Schema({
    name: String,
});

Color.index({name: 1}, {unique:true});
module.exports = mongoose.model('Color', Color);