const Project = require('../models/project');
const { validationResult } = require('express-validator');

exports.createProject = async (req, res) => {

  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const project = new Project(req.body);

  try {
    project.author = req.user.id;
    await project.save();
    res.json(project);
  } catch(err) {
    res.status(400).json({
      msg: 'there was an error'
    });
  }

}