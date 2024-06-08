//docker compose gagal sedangkan test saya kadang berhasil kadang gagal tolong bisa dikoreksi salahnya dimana supaya saya bisa koreksi dan nyoba ngoding lagi krn msh penasaran hehe:D.

const express = require('express')
const app = express()
const router = require('./routes')
const port = 3000
const errorHandler = require('./middleware/errorhandler.js')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)
app.use(errorHandler)
  
module.exports = app