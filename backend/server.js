const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const chalk = require('chalk');

dotenv.config({
    path: './config/config.env'
});

//Get Transactions
const transactions = require('./routes/transactions');

const app = express();

app.use('/api/v1/transactions', transactions)

const PORT = process.env.PORT || 5000;
 
app.listen(PORT, () => {
    console.log(chalk.blue(`-- Ser Env: ${process.env.NODE_ENV}  -- Ser Port: ${process.env.PORT}`));
});