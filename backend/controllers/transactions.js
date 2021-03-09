const Transaction = require('../models/Transaction');

// @desc Get all transactions
// @route GET /api/v1/transactions
// @access Public

exports.getTransactions = async (req, res, next) => {
    try {
        //GET all the transactions from the model => TransactionSchema
        //Await on the promise from the above async
        const transactions = await Transaction.find();

        //Return a response! 
        //Return some json data
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions  
        });
    } catch (error) {
        return res.send(500).json({
            success: false, 
            error: 'Server Error, sorry.'
        });
    }
}

// @desc Add transactions
// @route POST /api/v1/transactions
// @access Public

exports.addTransaction = async (req, res, next) => {
    res.send('POST Transactions');
}


// @desc Delete transactions
// @route DELETE /api/v1/transactions/:id
// @access Public

exports.deleteTransaction = async (req, res, next) => {
    res.send('Delete Transactions');
}