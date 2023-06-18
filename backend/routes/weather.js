const express = require('express');
const router = express.Router();

const {
    getHour
} = require('../controllers/weather')

router.route('/').get(getHour);
module.exports = router;