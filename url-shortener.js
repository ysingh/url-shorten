const { uuid, fromString } = require('uuidv4')

class UrlShortener {
  constructor () {
    this.BASE_URL='http://brit.ly/'
  }

  shorten(url) {
    console.log('Shortened Called')
    return `${this.BASE_URL}${fromString(url).split('-').join('')}`
  }
}

module.exports = new UrlShortener()
