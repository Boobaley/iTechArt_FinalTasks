function filmsCategoriesPutMW(req, res, next) {
    //ID
    if (!req.params.id) {
        res.status(500);
        throw new Error('missing id');
    }

    //TITLE
    if (!req.body.title || req.body.title.length < 3) {
        res.status(500);
        throw new Error('missing title');
    }

    //DESCRIPTION
    if (!req.body.description || req.body.description.length < 3 || req.body.description.length > 500) {
        res.status(500);
        throw new Error('Invalid description');
    }

    //FILMS
    if (!req.body.filmsId) {
        res.status(500);
        throw new Error('Incorrect films field');
    }
    next();
}

module.exports = filmsCategoriesPutMW;