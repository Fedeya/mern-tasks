const Task = require('../models/task');
const Project = require('../models/project');

const { validationResult } = require('express-validator');

exports.createTask = async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    res.status(400).json({ erros: errors.array() });
  }

  try {
    const project = await Project.findById(req.body.project);
    
    if(project.author.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'not authorized' })
    }

  } catch(err) {
    return res.status(404).json({ msg: 'project not found' });
  }

  const task = new Task(req.body);

  try {
    await task.save();
    res.json(task);
  } catch(err) {
    res.json({ msg: 'there was an error' });
  }


}

exports.getTasks = async (req, res) => {
  try {
    const project = await Project.findById(req.query.project);
    
    if(project.author.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'not authorized' })
    }

  } catch(err) {
    return res.status(404).json({ msg: 'project not found' });
  }

  try {
    const tasks = await Task.find({ project: req.query.project }).sort({
      createdAt: -1
    });
    res.json(tasks);
  } catch(err) {
    return res.status(404).json({ msg: 'there was an error' });
  }

}

exports.updateTask = async (req, res) => {

  try {
    const project = await Project.findById(req.body.project);
    if(project.author.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'not authorized' });
    }
  } catch (err) {
    return res.status(404).json({ msg: 'project not found' });
  }

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(task);
  } catch(err) {
    res.status(500).json({ msg: 'there was an error' });
  }
}

exports.deleteTask = async (req, res) => {
  try {
    const project = await Project.findById(req.query.project);
    if(project.author.toString() !== req.user.id) {
      res.status(401).json({ msg: 'not authorized' });
    }
  } catch(err) {
    res.status(404).json({ msg: 'project not found' });
  }

  try {
    const task = await Task.findById(req.params.id);
    if(!task) {
      return res.status(404).json({ msg: 'task not found' });
    }
    await Task.findByIdAndDelete(req.params.id);
    res.json(task);
  } catch(err) {
    res.status(500).json({ msg: 'there was an error' });
  }


}