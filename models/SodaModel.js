var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var sodaSchema = new Schema({
  'soda' : String
});

module.exports = mongoose.model('Sodas', sodaSchema);
