const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const chalk = require('chalk');
const connectDB = require('./config/db');

dotenv.config({
    path: './config/config.env'
});

connectDB(); 

//Get Transactions
const transactions = require('./routes/transactions');

const app = express();

app.use('/api/v1/transactions', transactions)

const PORT = process.env.PORT || 5000;
 
app.listen(PORT, () => {
    console.log(chalk.blue(`-- Ser Env: ${process.env.NODE_ENV}  -- Set Port: ${process.env.PORT}`));
});