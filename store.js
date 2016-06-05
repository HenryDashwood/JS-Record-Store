var _ = require('lodash');

var Store = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.records = []
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
  // sellRecord: function(keyName, value) {
  //   for(record of this.records) {
  //     if(record[keyName] === value) {
  //       this.records.slice
  //       return this.records;
  //     }
  //   }
  //   return "Not enough stock left";
  // }
  // listRecords: function() {
  //   return this.records;
  // }
}

module.exports = Store;