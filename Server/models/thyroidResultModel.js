const mongoose = require('mongoose');

const thyroidResultSchema = new mongoose.Schema({
    sex: String,
    age: Number,
    pregnant: Boolean,
    tsh: String,
    t4: String,
    t3: String,
    t4u: String,
    onThyroxine: Boolean,
    onAntithyroidMedication: Boolean,
    thyroidSurgery: Boolean,
    lithium: Boolean,
    goitre: Boolean,
    tumor: Boolean,
    fti: String
});

const ThyroidResult = mongoose.model('ThyroidResult', thyroidResultSchema);

module.exports = ThyroidResult;
