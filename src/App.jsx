import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './App.css'
import Footer from './components/Footer';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const markTaskComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='container'>
      <h1 className='head'>Task Management App</h1>
      <AddTask addTask={addTask}/>
      <TaskList tasks={tasks} markTaskComplete={markTaskComplete} deleteTask={deleteTask} />
      <Footer />
    </div>
  );
};

export default App;
