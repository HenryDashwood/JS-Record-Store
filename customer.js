var _ = require('lodash');

var Customer = function(name, records, money) {
  this.name = name;
  this.records = [];
  this.money = money; 
}

Customer.prototype = {
  
  readMoney: function() {
    return this.money;
  },
  buyRecord: function(record) {
    this.records.push(record)
  }

}

module.exports = Customer;