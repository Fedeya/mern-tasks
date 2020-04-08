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
    res.status(500).json({
      msg: 'there was an error'
    });
  }

}

exports.getProjects = async (req, res) => {

  try {
    const projects = await Project.find({ author: req.user.id }).sort({
      createdAt: -1
    });
    res.json(projects);  
  } catch(err) {
    res.status(500).json({
      msg: 'there was an error'
    });
  }

}

exports.updateProject = async (req, res) => {

  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ erros: errors.array() });
  }

  const { name } = req.body;

  try {
    let project = await Project.findById(req.params.id);

    if(!project) {
      return res.status(404).json({ msg: 'project not found' });
    }

    if(project.author.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'not authorized' });
    }

    project = await Project.findByIdAndUpdate(req.params.id, { name }, { new: true });

    res.json(project);
    
  } catch(err) {
    res.status(500).json({
      msg: 'there was an error'
    });
  }

}

exports.deleteProject = async (req, res) => {
  try {
    let project = await Project.findById(req.params.id);
    
    if(project.author.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'not authorized' });
    }

    project = await Project.findByIdAndDelete(req.params.id);

    res.json(project);

  } catch(err) {
    res.status(500).json({
      msg: 'there was an error'
    })
  }
}