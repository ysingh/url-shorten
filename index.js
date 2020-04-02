
const express = require('express')
const bodyParser = require('body-parser')

const { PORT } = require('./config')
const getRouter = require('./routes/get')
const postRouter = require('./routes/post')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', getRouter)
app.use('/', postRouter)

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
