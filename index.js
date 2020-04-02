
const express = require('express')
const bodyParser = require('body-parser')

const urlShortener = require('./url-shortener')
const { PORT } = require('./config')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/', (req, res, next) =>  {
  console.log()
  res.status(200).send(urlShortener.shorten(req.body.url))
})

app.get('/*', (req, res, next) => {
  const shortenedUrl = req.params[0]
  if (shortenedUrl) {
    res.redirect(urlShortener.getLongUrl(shortenedUrl))
  }
})

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
