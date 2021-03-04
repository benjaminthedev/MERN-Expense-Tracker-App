const express = require('express');
const chalk = require('chalk');
const router = express.Router();

router.get('/', (req, res) => res.send(
    chalk.yellow('Working on route home')
    ));

module.exports = router;