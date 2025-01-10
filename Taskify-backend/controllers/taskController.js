const Task = require('../models/Task');

// Get all tasks
const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
};

// Create a new task
const createTask = async (req, res) => {
  const { title } = req.body;
  const task = await Task.create({ title });
  res.status(201).json(task);
};

// Update a task
const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(task);
};

// Delete a task
const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: 'Task deleted' });
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
