const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');

// Map POST /api/contact to submitContactForm controller
router.route('/').post(submitContactForm);

module.exports = router;
