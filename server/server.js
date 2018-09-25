const path = require('path')
const express = require('express')

const bookRoutes = require('./routes/books')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/books', bookRoutes)

module.exports = server