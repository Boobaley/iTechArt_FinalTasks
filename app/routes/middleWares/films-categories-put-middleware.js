function filmsCategioriesPutMW(req, res, next) {
    //ID
    if (!req.params.id) {
        throw new Error('missing id');
    }

    //TITLE
    if (!req.body.title || req.body.title.length < 3) {
        throw new Error('missing title');
    }

    //DESCRIPTION
    if (!req.body.description || req.body.description.length < 3 || req.body.description.length > 500) {
        throw new Error('Invalid description');
    }

    //FILMS
    if (!req.body.films) {
        throw new Error('Incorrect films field');
    }
    next();
}

module.exports = filmsCategioriesPutMW;