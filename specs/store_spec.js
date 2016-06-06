var Store = require('../store.js');
var Record = require('../record.js');
var assert = require('chai').assert;

describe('Store', function() {

  beforeEach(function() {
    hmv = new Store('HMV', 'London', 0);
  })

  it('should be able to read the balance', function() {
    assert.equal(0, hmv.balance)
  })

  it('should have no stock', function() {
    assert.deepEqual([], hmv.records)
  })

  it('should be able to add stock', function() {
    var purchase1 = new Record('Bonxie', 'Stornoway', 5, 10, 20)
    hmv.addRecord(purchase1)
    assert.deepEqual([{title: "Bonxie", artist: "Stornoway", purchasePrice: 5, retailPrice: 10, stock: 20}], hmv.records)
  })

  it('should be able to find stock', function() {
    var purchase1 = new Record('Bonxie', 'Stornoway', 5, 10, 20)
    hmv.addRecord(purchase1)
    assert.deepEqual({title: "Bonxie", artist: "Stornoway", purchasePrice: 5, retailPrice: 10, stock: 20}, hmv.findRecord("title", "Bonxie"))
  })

  it('should be able to sell stock', function() {
    var purchase1 = new Record('Bonxie', 'Stornoway', 5, 10, 20)
    hmv.addRecord(purchase1)
    hmv.sellRecord(purchase1, 1)
    assert.deepEqual({title: "Bonxie", artist: "Stornoway", purchasePrice: 5, retailPrice: 10, stock: 19}, hmv.findRecord("title", "Bonxie"))
  })

  // it('should be able to list the stock', function() {
  //   // var purchase1 = new Record('Bonxie', 'Stornoway', 5, 10, 20)
  //   // hmv.addRecord(purchase1)
  //   assert.deepEqual({title: "Bonxie", artist: "Stornoway", purchasePrice: 5, retailPrice: 10, stock: 20}, hmv.records)
  // })

  // it('should be able to list the stock and balance of the store', function() {

  // })


    
})