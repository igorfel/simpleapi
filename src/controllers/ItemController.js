const mongoose = require('mongoose')

const Item = mongoose.model('Item')

module.exports = {
  async index(req, res) {
    const itens = await Item.find()

    return res.json(itens)
  },

  async store(req, res) {
    const item = await Item.create(req.body)

    return res.json(item)
  }
}