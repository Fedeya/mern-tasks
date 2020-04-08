const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const { createProject, getProjects, updateProject, deleteProject } = require('../controllers/projects');

// api/projects
router.route('/')
  .post([
    check('name', 'the name of project is required').not().isEmpty()
  ], createProject)
  .get(getProjects);

router.route('/:id')
  .put([
    check('name', 'the name of project is required').not().isEmpty()
  ], updateProject)
  .delete(deleteProject);

module.exports = router;