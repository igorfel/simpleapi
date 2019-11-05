const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

mongoose.connect(
  'mongodb://localhost:27017/apiclp', 
  { useNewUrlParser: true, useUnifiedTopology: true }
)
require('./src/models/item')

app.use('/api', require('./src/routes'))

app.listen(3001)