const express = require('express');
const router = express.Router();

router.route('/films/categories')
    .get((req, res, next) => {
        const categories = {
            categories: []
        };
        res.send(categories);
    })
    .post((req, res, next) => {
        const categories = {
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            films: [req.body.films]
        }
        res.send(categories);
    });

router.route('/films/categories/:id')
    .put((req, res, next) => {
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