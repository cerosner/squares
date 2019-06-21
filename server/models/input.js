const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Input', new Schema({
  title: {
    type: String,
    require: true,
    default: 'Input'
  },
  emoji: {
    type: String,
    require: true,
    default: '🏷️'
  },
  buttonOn: {
    type: Boolean,
    require: true,
    default: false
  },
  addInput: {
    type: Boolean,
    require: true,
    default: false
  }
}))
