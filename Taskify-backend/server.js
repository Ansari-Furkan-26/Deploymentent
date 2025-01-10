const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Task = require('./models/Task'); // Assuming Task is the Mongoose model

// CORS Configuration (allow requests from frontend)
// app.use(cors());
app.use(cors({
    origin: '*', // Your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  }));
app.use(express.json()); // to parse JSON requests
  
// Routes
// Simple GET route that sends a "Hey" message
app.get('/api/get', (req, res) => {
    res.json({ message: 'Hey' });
  });

// Fetch tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
});

// Backend: Task Route (POST /api/tasks)
app.post('/api/tasks', async (req, res) => {
    // Check if the title exists in the request body
    if (!req.body.title) {
      return res.status(400).json({ message: 'Title is required' });
    }
  
    try {
      // Create a new task using the title from the request
      const newTask = new Task({ title: req.body.title });
  
      // Save the task to the database
      await newTask.save();
  
      // Respond with the created task
      res.status(201).json(newTask);
    } catch (error) {
      // Log the error and return a detailed response
      console.error('Error adding task:', error.message); // Log specific error message
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  });
  

// Update a task
app.put('/api/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title },
      { new: true }
    );
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error updating task' });
  }
});

// Delete a task
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task' });
  }
});
// 

// Start server
mongoose.connect('mongodb+srv://ansarifurkanabcd786:F7ciQWNoa0SRh45S@cluster0.k7ydl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000, // Adjust the timeout for the connection
    socketTimeoutMS: 45000, // Adjust socket timeout (in ms)
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
