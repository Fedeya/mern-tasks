const { Router } = require('express');
const router = Router();

const { createTask, getTasks } = require('../controllers/tasks');
const { check } = require('express-validator');

// api/tasks
router.route('/')
  .get(getTasks)
  .post([
    check('name', 'the name of tasks is required').not().isEmpty(),
    check('project', 'the project is required').not().isEmpty()
  ], createTask)

module.exports = router;