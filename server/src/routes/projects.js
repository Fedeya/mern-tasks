const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const { createProject } = require('../controllers/projects');

// api/projects
router.route('/')
  .post([
    check('name', 'the name of project is required').not().isEmpty()
  ], createProject);

module.exports = router;