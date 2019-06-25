const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    _id: {
        type: Number
    },
    title: {
        type: String,
        minlength: 3,
        required: true
    },
    description: {
        type: String,
        minlength: 3,
        maxlength: 500,
        required: true
    },
    films: {
        type: Array,
        required: true
    }
});

const FilmCategory = mongoose.model('categories', categorySchema);

module.exports = FilmCategory;