const express = require('express')
const router = express.Router()
const Transaction = require('../models/transaction');

router.get('/transactions', function (req, res) {
    Transaction.find({}, function (err, ransactions) {
        res.send(ransactions)
    })
})

router.post('/transaction', function (req, res) {

    let amount = req.body.amount
    let category = req.body.category
    let vendor = req.body.vendor

    let transaction = new Transaction({ 
        amount: amount, 
        category: category, 
        vendor: vendor 
    }) 
    transaction.save()
    res.send(transaction)   
})

router.delete('/transaction', function (req, res) {
    let transactionId = req.body.id
    Transaction.findByIdAndDelete(transactionId, function (err, transaction) {
        res.send(transaction)
    })
})
module.exports = router