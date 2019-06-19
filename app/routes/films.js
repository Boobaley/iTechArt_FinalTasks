const express = require('express');
const router = express.Router();

router.get('/api/films', (req, res, next) => {
    res.send([]);
});
  
module.exports = router;