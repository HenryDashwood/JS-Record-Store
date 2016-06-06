var Store = require('../store.js');
var Customer = require('../customer.js');
var Record = require('../record.js');
var assert = require('chai').assert;

describe('Customer', function() {

  beforeEach(function() {
    customer1 = new Customer('Henry', [], 100);
  })

  it('should see how much money is left', function() {
    assert.equal(100, customer1.money)
  })

  it('should have no stock', function() {
    assert.deepEqual([], customer1.records)
  })

  it('should be able to buy records', function() {
    var purchase1 = new Record('Bonxie', 'Stornoway', 5, 10, 1)
    customer1.buyRecord(purchase1)
    assert.deepEqual([{title: "Bonxie", artist: "Stornoway", purchasePrice: 5, retailPrice: 10, stock: 1}], customer1.records)
  })

  // it('should be able to sell records', function() {
    
  // })

})