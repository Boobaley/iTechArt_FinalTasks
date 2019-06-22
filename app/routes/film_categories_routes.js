const express = require('express');
const router = express.Router();
const postMW = require('./middleWares/films-categories-post-middleware');
const putMW = require('./middleWares/films-categories-put-middleware');

router.route('/films/categories')
    .get((req, res, next) => {
        const categories = {
            categories: []
        };
        res.send(categories);
    })
    .post(postMW, (req, res, next) => {
        const categories = {
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            films: [req.body.films]
        }
        res.send(categories);
    });

router.route('/films/categories/:id?')
    .put(putMW, (req, res, next) => {
        const categories = {
            id: req.params.id,
            title: req.body.title,
            description: req.body.description,
            films: [req.body.films]
        }
        res.send(categories);
    })
    .delete((req, res, next) => {
        const result = {
            success: true,
            id: req.params.id
        }
        res.send(result);
    })

module.exports = router;