const { Router } = require('express');
const router = Router();

const { addUser } = require('../controllers/users');

router.route('/')
  .post(addUser);

module.exports = router;