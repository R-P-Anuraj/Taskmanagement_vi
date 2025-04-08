import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, markTaskComplete, deleteTask }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            markTaskComplete={markTaskComplete}
            deleteTask={deleteTask}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;