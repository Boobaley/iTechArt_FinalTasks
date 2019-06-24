const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filmsSchema = new Schema({
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
    avatar: {
        type: String,
        required: true
    },
    gallery: {
        type: [String],
        minlength: 4,
        required: true
    },
    rating: {
        type: Number,
        required: false
    },
    category: {
        type: Number,
        required: false
    }
});
const Film = mongoose.model('Films', filmsSchema);

module.exports = Film;