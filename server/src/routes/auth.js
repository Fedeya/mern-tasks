const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { authenticateUser } = require('../controllers/auth');

router.route('/')
  .post([
    check('email', 'add a valid email').isEmail(),
    check('password', 'the password must be a minimum of 6 characters').isLength({ min: 6 })
  ], authenticateUser);

module.exports = router;