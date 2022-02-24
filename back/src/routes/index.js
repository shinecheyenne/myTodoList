const express = require('express');
const router = express.Router();
const todo = require('./Todo');

router.use('/todos', todo);

module.exports = router;