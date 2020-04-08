const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const auth = require('../middleware/auth');

const { authenticateUser, userAuthenticated } = require('../controllers/auth');

router.route('/')
  .post([
    check('email', 'add a valid email').isEmail(),
    check('password', 'the password must be a minimum of 6 characters').isLength({ min: 6 })
  ], authenticateUser)
  .get(auth, userAuthenticated);

module.exports = router;