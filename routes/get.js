const express = require('express')
const router = express.Router()
const urlShortener = require('../url-shortener')

router.get('/:shortUrl', (req, res, next) => {
  res.redirect(urlShortener.getLongUrl(req.params.shortUrl))
})

module.exports = router
