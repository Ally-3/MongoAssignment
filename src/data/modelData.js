const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    movie: {
        type: String,
        required: true
    }
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;