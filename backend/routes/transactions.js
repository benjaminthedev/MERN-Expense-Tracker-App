const express = require('express');
const chalk = require('chalk');
const { getTransactions } = require('../controllers/transactions');
const router = express.Router();

router
    .route('/')
    .get(getTransactions);



module.exports = router;