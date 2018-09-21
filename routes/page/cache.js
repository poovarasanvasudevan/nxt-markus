const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.marko(require('../../view/offline/index.marko'), {});
})

module.exports = router;