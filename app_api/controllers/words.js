var mongoose = require('mongoose');
mongoose.set('debug', true);


// Importing Model
var Word = mongoose.model('Word');


// Fetching all entries and sending response

module.exports.readAll = function (req, res, next) {
    Word.find({})
    .exec(function(err, items) {
        if (err) {
            console.log(err)
        }

        res.json(items);
    })
}
