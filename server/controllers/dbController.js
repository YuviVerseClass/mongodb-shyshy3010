const Task = require('../models/Task');

async function getTasks(req, res) {
  try {
    const tasks = await Task.find(); // récupère toutes les tâches
    res.json(tasks);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function addTask(req, res) {
  try {
    const newTask = new Task({ title: req.body.title });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).send(err.message);
  }
}

async function toggleTask(req, res) {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).send("Task not found");

    task.done = !task.done; // inverse l'état "done"
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function deleteTask(req, res) {
  try {
    const result = await Task.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).send("Task not found");

    res.sendStatus(204); // pas de contenu mais succès
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = {
  getTasks,
  addTask,
  toggleTask,
  deleteTask,
};
