const express = require('express');
const router = express.Router();
const postValidationMW = require('./middleWares/films-routes-post-middleware');
const putValidationMW = require('./middleWares/films-routes-put-middleware');

router.route('/films')
    .get((req, res, next) => {
        const films = {
            films: []
        }
        res.send(films);
    })
    .post(postValidationMW,(req, res, next) => {
        const film = {
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            avatar: req.body.avatar,
            gallery: [req.body.gallery],
            rating: req.body.rating,
            category: req.body.category
        }
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