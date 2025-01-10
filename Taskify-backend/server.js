const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors());         // Enable CORS

// Connect to MongoDB
connectDB();

// Routes
// app.use('/api/tasks', taskRoutes);

// Fetch all tasks
app.get('/api/tasks', async (req, res) => {
    try {
      const tasks = await Task.find(); // Fetch all tasks from the database
      res.status(200).json(tasks); // Return the tasks as JSON
    } catch (error) {
      res.status(500).json({ message: 'Error fetching tasks' });
    }
  });
  

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
