const express = require('express');
var router = express.Router();

router.use('/cache', require('./cache'))

module.exports = router;