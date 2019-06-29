const express = require('express');
const router = express.Router();
const postValidationMW = require('./middleWares/films-routes-post-middleware');
const putValidationMW = require('./middleWares/films-routes-put-middleware');
const Film = require('../models/filmSchema');

router.route('/films')
    .get((req, res, next) => {
        Film.find((err, films) => {
            if (err) {
                throw new Error(err);
            };
            res.send(films)
        });
    })
    .post(postValidationMW, (req, res, next) => {
        const film = new Film();
        
        film._id = req.body.id;
        film.title = req.body.title;
        film.description = req.body.description;
        film.avatar = req.body.avatar;
        film.gallery = req.body.gallery;
        film.rating = req.body.rating;
        film.categoryId = req.body.categoryId;

        film.save((err, result) => {
            if (err) {
                throw new Error('something bad happened');
            } else {
                res.send(result);
            };
        });
    });

router.route('/films/:id?')
    .put(putValidationMW, (req, res, next) => {
        Film.updateOne({ _id: req.params.id }, {
            title: req.body.title,
            description: req.body.description,
            avatar: req.body.avatar,
            gallery: req.body.gallery,
            rating: req.body.rating,
            categoryId: req.body.categoryId
        })
        .then(result => res.send(result))
        .catch(err => {
            throw new Error(err)
        });
    })
    .delete((req, res) => {
        Film.remove({ _id: req.params.id }, (err, result) => {
            if (err) {
                throw new Error(err);
            }
            res.send(result);
        });
    });

module.exports = router;