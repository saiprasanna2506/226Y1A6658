const express = require('express');
const router = express.Router();
const { fetchNumbers } = require('../controllers/averageController');

router.get('/:type', fetchNumbers);

module.exports = router;
