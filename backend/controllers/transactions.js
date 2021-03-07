// @desc Get all transactions
// @route GET /api/v1/transactions
// @access Public

exports.getTransaction = (req, res, next) => {
    res.send('GET Transactions');
}