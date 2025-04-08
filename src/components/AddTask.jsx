// import React, { useState } from 'react';
// import '../App.css'

// const AddTask = ({ addTask }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [dueDate, setDueDate] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title || !dueDate) {
//       alert('Title and Due Date are required!');
//       return;
//     }
//     addTask({ title, description, dueDate, completed: false });
//     setTitle('');
//     setDescription('');
//     setDueDate('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         required
//       />
//       <br></br>
//       <input
//         type="text"
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <br></br>
//       <input
//         type="date"
//         value={dueDate}
//         onChange={(e) => setDueDate(e.target.value)}
//         required
//       /><br></br>
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default AddTask;
import React, { useState } from 'react';
import '../App.css';

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) {
      alert('Title and Due Date are required!');
      return;
    }
    addTask({ title, description, dueDate, completed: false });
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <h2>Add New Task</h2>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          placeholder="Enter task description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="dueDate">Due Date:</label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn submit-btn">Add Task</button>
    </form>
  );
};

export default AddTask;