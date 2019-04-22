var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wordSchema = new Schema({
    word: String,
    category: String,
});

mongoose.model('Word', wordSchema);