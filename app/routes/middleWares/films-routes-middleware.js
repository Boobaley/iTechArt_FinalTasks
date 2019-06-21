function filmsValidation(req, res, next) {
    const avatarPathValidation = /^https?:\/\//i;
    
    if (!req.body.id) {
        throw new Error('Missing id');
    }

    if (!req.body.title || req.body.title.length < 3) {
        throw new Error('Incorrect title');
    }
    
    if (!req.body.description || req.body.description.length < 3 || req.body.description.length > 500) {
        throw new Error('Invalid description');
    }

    if (!req.body.avatar || !avatarPathValidation.test(req.body.avatar)) {
        throw new Error('Incorrect avatar link');
    }

    if (!req.body.gallery || req.body.gallery.length < 4) {
        throw new Error('Invalid gallery value');
    }

    if (
        !parseInt(req.body.rating) && isNaN(parseInt(req.body.rating)) || req.body.rating < 0 || req.body.rating > 5) {
        console.log();
        throw new Error('Incorrect value of rating' );
    }
    next();
}

module.exports = filmsValidation;