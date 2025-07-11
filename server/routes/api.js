// routes/api.js

const express = require('express');
const router = express.Router();

// Require your controller
const db = require('../controllers/dbController');

// Wire each route to its controller method
router.get('/tasks', db.getTasks);
router.post('/tasks', db.addTask);
router.patch('/tasks/:id', db.toggleTask);
router.delete('/tasks/:id', db.deleteTask);

// Export the router
module.exports = router;
