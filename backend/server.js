const express = require('express')
const server = express()
const routes = require('./routes/routes')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/xSite")

server.use(express.json())
server.use(cors())
server.use('/api', routes)
server.listen(8081, () => console.log("Backend has loaded."))

http://localhost:8081/api/signup?username=test&email=test@test.co&password=passwordtest
