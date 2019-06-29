const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = require('./filmsCategorySchema');

const filmsSchema = new Schema({
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
        required: false,
        min: 0,
        max: 5
    },
    categoryId: {
        type: Number,
        required: false
    }
});

filmsSchema.post('save', (film, next) => {
    categorySchema.findOne({ _id: film.categoryId })
    .updateOne({ $push: {filmsId: film._id} })
    .then(() => next());
});
const Film = mongoose.model('films', filmsSchema);

module.exports = Film;