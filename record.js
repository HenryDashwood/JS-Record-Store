var _ = require('lodash');

var Record = function(title, artist, purchasePrice, retailPrice, stock) {
  this.title = title;
  this.artist = artist;
  this.purchasePrice = purchasePrice;
  this.retailPrice = retailPrice;
  this.stock = stock;
}

module.exports = Record;