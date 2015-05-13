var mongoose = require('mongoose');

var assignmentSchema = new mongoose.Schema({
    name: String,
    score: Number,
    finished: {
        completed: Boolean
    },
    description: String,
    gold_stars: Number
});

module.exports = mongoose.model('assignments', assignmentSchema);