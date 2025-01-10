// HomePage.jsx
import React, { useEffect, useState } from 'react';
import api from '../utils/api'; // Assuming you've set up an api utility
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');

  // Fetch tasks from API
  const fetchTasks = async () => {
    try {
      const response = await api.get('/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add a task
  const addTask = async (taskTitle) => {
    if (!taskTitle.trim()) return; // Prevent submitting an empty title
    try {
      await api.post('/api/tasks', { title: taskTitle });
      setTaskTitle(''); // Reset input after successful add
      fetchTasks(); // Fetch updated tasks
    } catch (error) {
      console.error('Error adding task:', error.message);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await api.delete(`/api/tasks/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error.message);
    }
  };

  const updateTask = async (taskId, updatedTitle) => {
    try {
      await api.put(`/api/tasks/${taskId}`, { title: updatedTitle });
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error.message);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      api.get('/ping') // Ping the server to keep it alive
        .then((response) => console.log('Ping response:', response.data))
        .catch((error) => console.error('Error pinging the server:', error));
    }, 30000); // 30 seconds interval

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-lg font-semibold text-center mb-4">Taskify</h1>
      {/* Pass addTask as a prop to TaskForm */}
      <TaskForm taskTitle={taskTitle} setTaskTitle={setTaskTitle} onAddTask={addTask} />
      {/* Pass deleteTask and updateTask as props to TaskList */}
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onUpdateTask={updateTask} />
    </div>
  );
};

export default HomePage;
