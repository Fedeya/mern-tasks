const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const { addUser } = require('../controllers/users');

router.route('/')
  .post([ 
    check('name', 'the name is required').not().isEmpty(),
    check('email', 'add a valid email').isEmail(),
    check('password', 'the password must be a minimum of 6 characters').isLength({ min: 6 })
  ], addUser);

module.exports = router;