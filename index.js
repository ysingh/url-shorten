const urlShortener = require('./url-shortener')
const readline = require('readline')

const shortenedUrls = {}

const shortenUrl = (url) => {
  if (shortenedUrls[url]) {
    shortenedUrls[url].hitCount++

    console.log(shortenedUrls[url].hitCount)
    return shortenedUrls[url].url
  }
  const shortenedUrl = urlShortener.shorten(url)
  shortenedUrls[url] = {}
  shortenedUrls[url].hitCount = 1
  shortenedUrls[url].url = shortenedUrl

  console.log(shortenedUrls[url].hitCount)
  return shortenedUrl
}

const main = () => {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter URL: '
  })
  rl.prompt()
  rl.on('line', (line) => {
    console.log(shortenUrl(line.trim()))
    rl.prompt()
  }).on('close', () => {
    console.log('Have a great day!')
    process.exit(0)
  })
}

main()
