const express = require('express')
const router = express.Router()
const urlShortener = require('../url-shortener')

router.post('/', (req, res, next) =>  res.status(200).send(urlShortener.shorten(req.body.url)))

module.exports = router
