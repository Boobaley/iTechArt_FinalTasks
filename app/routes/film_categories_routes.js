const express = require('express');
const router = express.Router();
const postMW = require('./middleWares/films-categories-post-middleware');
const putMW = require('./middleWares/films-categories-put-middleware');
const Category = require('../models/filmsCategorySchema');

router.route('/films/categories')
    .get(async(req, res, next) => {
        const categories = await Category.find();
        res.send(categories);
    })
    .post(postMW, (req, res, next) => {
        const category = new Category();
        
        category._id = req.body.id;
        category.title = req.body.title;
        category.description = req.body.description;
        category.filmsId = req.body.filmsId;
        category.save().then(response => console.log(response)).catch(err => console.log(err));
        res.send(category);
        next();
    });

router.route('/films/categories/:id?')
    .put(putMW, (req, res, next) => {
        Category.updateOne({_id: req.params.id}, {
            title: req.body.title,
            description: req.body.description,
            filmsId: req.body.filmsId
        }, (err, result) => {
            if (err) return console.log(err);
            res.send(result);
        });
        res.send(categories);
    })
    .delete((req, res, next) => {
        Category.remove({_id: req.params.id}, (err, result) => {
            if (err) return console.log(err);
            res.send(result);
        });
    });

module.exports = router;