const validUrlUtf8 = require('valid-url-utf8')
const { BASE_URL } = require('./config')

class UrlShortener {
  constructor () {
    this.alphabet = '0123456789abcdefghijklmnopqrstuvwxyz'
    this.size = 1
    this.generatedEntries = 0
    this.shortenedUrls = {}
    this.shortUrls = {}
  }

  shorten(url) {
    if (!validUrlUtf8(url)) {
      throw new Error('Invalid URL')
    }
    if (this.shortenedUrls[url]) {
      this.shortenedUrls[url].hitCount++
      return `${BASE_URL}${this.shortenedUrls[url].url}`
    }
    const shortenedUrl = this.encode(url)
    this.shortenedUrls[url] = {}
    this.shortenedUrls[url].hitCount = 1
    this.shortenedUrls[url].url = shortenedUrl
    this.shortUrls[shortenedUrl] = url

    return `${BASE_URL}${shortenedUrl}`
  }

  getLongUrl(shortUrl) {
    return this.shortUrls[shortUrl]
  }

  encode(url) {
    const shortenedUrl = []
    for (let i = 0; i < this.size; ++i) {
      let randIndex = Math.floor(Math.random() * (this.alphabet.length -1))
      shortenedUrl.push(this.alphabet[randIndex])
    }
    this.generatedEntries++
    if (this.generatedEntries > this.size * this.alphabet.length) {
      this.size++
    }
    return shortenedUrl.join('')
  }
}

module.exports = new UrlShortener()
