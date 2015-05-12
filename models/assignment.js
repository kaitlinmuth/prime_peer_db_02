var mongoose = require('mongoose');

var assignmentSchema = new mongoose.Schema({
    name: String,
    score: Number,
    finished: {
        completed: Boolean,
        date_completed: Date
    },
    description: String,
    gold_stars: Number
});

module.exports = mongoose.model('assignments', assignmentSchema);