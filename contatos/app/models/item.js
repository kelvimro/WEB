// /models/item.js
var mongoose = require('mongoose');

module.exports = function () {
  var schema = mongoose.Schema({
    nome: {
      type: String,
      require: true
    },
    preco: {
      type: String,
      index: {
        unique: true
      }
    },
    obs:{
      type: String
    }
  });

  return mongoose.model('Item', schema);
};