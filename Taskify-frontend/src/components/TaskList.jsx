import React from 'react';
import { FaTrash } from 'react-icons/fa';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task._id}
          className="flex justify-between items-center border-b pb-2"
        >
          <span>{task.title}</span>
          <button
            onClick={() => onDeleteTask(task._id)}
            className="text-red-500 hover:text-red-700"
          >
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
