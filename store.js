var _ = require('lodash');

var Store = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.records = []
}

Store.prototype = {
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
  sellRecord: function(keyName, value) {
    for(record of this.records) {
      if(record[keyName] === value) {
        return record;
      }
    }
    return "Not enough stock left";
  }
}

module.exports = Store;