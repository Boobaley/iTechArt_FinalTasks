function filmsPostValidation(req, res, next) {
    const linkValidation = /^https?:\/\//i;

    //ID
    if (!req.body.id) {
        throw new Error('Missing id');
    }

    //TITLE
    if (!req.body.title || req.body.title.length < 3) {
        throw new Error('Incorrect title');
    }

    //DESCRIPTION
    if (!req.body.description || req.body.description.length < 3 || req.body.description.length > 500) {
        throw new Error('Invalid description');
    }

    //AVATAR
    if (!req.body.avatar || !linkValidation.test(req.body.avatar)) {
        throw new Error('Incorrect avatar link');
    }

    //GALLERY
    if (req.body.gallery) {
        for (let i = 0; i < req.body.gallery.length; i++) {
            if (!linkValidation.test(req.body.gallery[i])) {
                throw new Error('Invalid gallery value');
            }
        }
    }

    if (!req.body.gallery || req.body.gallery.length < 4) {
        throw new Error('Invalid gallery value');
    }

    //RATING
    if (req.body.rating && isNaN(parseInt(req.body.rating)) || req.body.rating < 0 || req.body.rating > 5) {
        throw new Error('Incorrect value of rating' );
    }
    next();
}

module.exports = filmsPostValidation;