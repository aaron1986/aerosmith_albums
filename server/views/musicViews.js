const express = require('express');
const router = express.Router();

const artistController = require('../controller/musicController');

router.get('/music', artistController.getAllMusic);

module.exports = router;  