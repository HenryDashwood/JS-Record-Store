var Store = require('./store.js');
var Customer = require('./customer.js');
var Record = require('./record.js');
var _ = require('lodash');

var Store = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.records = [];
}

Store.prototype = {
  readBalance: function() {
    return this.balance;
  },
  addRecord: function(record) {
    this.records.push(record)
  },
  findRecord: function(keyName,value) {
    for(record of this.records) {
      if(record[keyName] === value) {
        return record;
      }
    }
    return "Unable to find record";
  },
  sellRecord: function(title, quantity) {
    console.log(this.stock)
    var found = this.findRecord('title')
    this.found[stock] -= quantity
  }
  // listRecords: function() {
  //   return this.records;
  // }
}

module.exports = Store;