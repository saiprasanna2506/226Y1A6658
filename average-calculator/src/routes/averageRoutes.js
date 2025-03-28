const express = require('express');
const router = express.Router();
const averageController = require('../controllers/averageController');


router.get('/:type', averageController.getNumbers);

module.exports = router;
