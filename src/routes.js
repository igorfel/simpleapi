const express = require('express')
const routes = express.Router()

const ItensController = require('./controllers/ItemController')

routes.get('/itens', ItensController.index)
routes.post('/itens', ItensController.store)

module.exports = routes