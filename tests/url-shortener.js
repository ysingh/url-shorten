const urlShortener = require('../url-shortener')
// console.log(urlShortener)
const assert = require('assert')

const email = 'https://www.t-mobile.com'

assert(urlShortener.shorten(email), '')
