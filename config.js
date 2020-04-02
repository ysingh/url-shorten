require('dotenv').config()

const { PORT, BASE_URL } = process.env

module.exports = {
  PORT: PORT || '8080',
  BASE_URL
}

