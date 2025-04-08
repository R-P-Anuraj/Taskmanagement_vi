import React from 'react';
import '../App.css';

const TaskItem = ({ task, index, markTaskComplete, deleteTask }) => {
  return (
    <tr className="task-row">
      <td style={{ fontWeight: 'bold' }}>{task.title}</td>
      <td>{task.description || 'N/A'}</td>
      <td>{task.dueDate}</td>
      <td className={task.completed ? 'status-completed' : 'status-pending'}>
        {task.completed ? 'Completed' : 'Pending'}
      </td>
      <td>
        {!task.completed && (
          <button className="btn complete-btn" onClick={() => markTaskComplete(index)}>
            Complete
          </button>
        )}
        <button className="btn delete-btn" onClick={() => deleteTask(index)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;