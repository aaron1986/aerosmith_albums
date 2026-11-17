
const express = require('express');
const router = express.Router();

const musicController = require('../controllers/musicController');

router.get('/music', musicController.getAllMusic);

module.exports = router;
