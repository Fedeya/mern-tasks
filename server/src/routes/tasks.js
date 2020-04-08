const { Router } = require('express');
const router = Router();

const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/tasks');
const { check } = require('express-validator');

// api/tasks
router.route('/')
  .get(getTasks)
  .post([
    check('name', 'the name of task is required').not().isEmpty(),
    check('project', 'the project is required').not().isEmpty()
  ], createTask)

router.route('/:id')
  .delete(deleteTask)
  .put([ 
    check('name', 'the name of task is required').not().isEmpty(),
    check('project', "the project is required").not().isEmpty()
  ], updateTask)

module.exports = router;