const express = require('express');
const chalk = require('chalk');
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions');
const router = express.Router();


//GET Transaction
router
    .route('/')
    .get(getTransactions)
    .post(addTransaction);  

//Delete Transaction
router
    .route('/:id')
    .delete(deleteTransaction);    


module.exports = router;