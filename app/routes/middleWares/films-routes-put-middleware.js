function filmsPutValidation(req, res, next) {
    const linkValidation = /^https?:\/\//i;
    
    //ID
    if (!req.params.id) {
        res.status(500);
        throw new Error('Missing id');
    }

    //TITLE
    if (!req.body.title || req.body.title.length < 3) {
        res.status(500);
        throw new Error('Incorrect title');
    }

    //DESCRIPTION
    if (!req.body.description || req.body.description.length < 3 || req.body.description.length > 500) {
        res.status(500);
        throw new Error('Invalid description');
    }

    //AVATAR
    if (!req.body.avatar || !linkValidation.test(req.body.avatar)) {
        res.status(500);
        throw new Error('Incorrect avatar link');
    }

    //GALLERY
    if (req.body.gallery && req.body.gallery.length >= 4) {
        for (let i = 0; i < req.body.gallery.length; i++) {
            if (!linkValidation.test(req.body.gallery[i])) {
                res.status(500);
                throw new Error('Invalid gallery value');
            };
        };
    } else {
        res.status(500);
        throw new Error('Invalid gallery value');
    }

    //RATING
    if (req.body.rating && isNaN(+req.body.rating) || req.body.rating < 0 || req.body.rating > 5) {
        res.status(500);
        throw new Error('Incorrect value of rating' );
    }
    next();
}

module.exports = filmsPutValidation;