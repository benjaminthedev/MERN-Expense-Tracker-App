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
        return res.status(500).json({
            success: false, 
            error: 'GET - Server Error, sorry.'
        });
    }
}

// @desc Add transactions
// @route POST /api/v1/transactions
// @access Public

exports.addTransaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body;
        const transaction = await Transaction.create(req.body);
        return res.status(201).json({
            success: true, 
            data: transaction
        });        
    } catch (err) {
      if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.message);
        //Client err 400
        return res.status(400).json({
            success: false, 
            error: messages
        })
      } else {
        return res.status(500).json({
            success: false, 
            error: 'ADD - Server Error, sorry.'
        });
      }
    }
}


// @desc Delete transactions
// @route DELETE /api/v1/transactions/:id
// @access Public

exports.deleteTransaction = async (req, res, next) => {
   try {
       const transaction = await Transaction.findById(req.params.id);
       if(!transaction){
        return res.status(404).json({
            success: false, 
            error: ' No transaction found'
        });
       }

       await transaction.remove(); 

       return res.status(200).json({
           success: true, 
           data: {}
       });

   } catch (error) {
        return res.status(500).json({
            success: false, 
            error: 'DELETE - Server Error, sorry.'
        });
   }
}