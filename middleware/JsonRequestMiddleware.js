const express = require('express');
var app = express()

const JsonMiddleware =  function (req, res, next) {
    var contype = req.headers['content-type']
    if (!contype || contype.indexOf('application/json') !== 0)
        return res.send(400)

    next()
}

module.exports = JsonMiddleware