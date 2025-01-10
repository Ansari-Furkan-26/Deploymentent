import React from 'react';
import { FaTrash } from 'react-icons/fa';

const TaskList = ({ tasks, onDeleteTask }) => {
  // Check if tasks is an array before using map
  if (!Array.isArray(tasks)) {
    return <div>No tasks available</div>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <button onClick={() => onDeleteTask(task._id)}>Delete</button>
          {/* <FaTrash /> */}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
