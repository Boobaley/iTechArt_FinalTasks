const express = require('express');
const router = express.Router();

router.get("/hello-world/:name?", (req, res, next) => {
    const name = req.params.name;

    if (!name) {
        const error = new Error('Missing name');
        next(error);
    }
    res.end(`<div>Hello ${name}!</div>`);
});


module.exports = router;