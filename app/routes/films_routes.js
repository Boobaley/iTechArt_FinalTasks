const express = require('express');
const router = express.Router();
const postValidationMW = require('./middleWares/films-routes-post-middleware');
const putValidationMW = require('./middleWares/films-routes-put-middleware');
const Film = require('../models/film');

router.route('/films')
    .get(async(req, res, next) => {
        const films = await Film.find().limit(10);
        res.send(films);
    })
    .post(postValidationMW, (req, res, next) => {
        const film = new Film();
        film._id = req.body.id;
        film.title = req.body.title;
        film.description = req.body.description;
        film.avatar = req.body.avatar;
        film.gallery = req.body.gallery;
        film.rating = req.body.rating;
        film.category = req.body.category
        film.save().then(response => console.log(response)).catch(err => console.log(err));
        res.send(film);
        next();
    });

router.route('/films/:id?')
    .put(putValidationMW,(req, res, next) => {
        const film = {
            id: req.params.id,
            title: req.body.title,
            description: req.body.description,
            avatar: req.body.avatar,
            gallery: [req.body.gallery],
            rating: req.body.rating,
            category: req.body.category
        }
        res.send(film);
    })
    .delete((req, res) => {
        const result = {
            success: true,
            id: req.params.id
        }
        res.send(result);
    });

module.exports = router;