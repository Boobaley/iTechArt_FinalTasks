const express = require('express');
const router = express.Router();
const postMW = require('./middleWares/films-categories-post-middleware');
const putMW = require('./middleWares/films-categories-put-middleware');
const Category = require('../models/filmsCategorySchema');

router.route('/films/categories')
    .get((req, res, next) => {
        Category.find((err, categories) => {
            if (err) {
                throw new Error(err)
            }
            res.send(categories);
        });
    })
    .post(postMW, (req, res, next) => {
        const category = new Category();
        
        category._id = req.body.id;
        category.title = req.body.title;
        category.description = req.body.description;
        category.filmsId = req.body.filmsId;
        
        category.save((err, result) => {
            if (err) {
                throw new Error('somethig bad happend');
            } else {
                res.send(result);
            }
        });
    });

router.route('/films/categories/:id?')
    .put(putMW, (req, res, next) => {
        Category.updateOne({_id: req.params.id}, {
            title: req.body.title,
            description: req.body.description,
            filmsId: req.body.filmsId
        })
        .then(result => res.send(result))
        .catch(err => {
            throw new Error(err)
        });
    })
    .delete((req, res, next) => {
        Category.remove({_id: req.params.id}, (err, result) => {
            if (err) return console.log(err);
            res.send(result);
        });
    });

module.exports = router;