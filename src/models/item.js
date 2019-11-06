const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: false
  },
  dataArray: {
    type: Object,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

mongoose.model('Item', ItemSchema)