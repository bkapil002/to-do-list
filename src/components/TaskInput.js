import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  // State to manage the input field value
  const [task, setTask] = useState('');

  // Function to handle input value change
  function handleInputValue(event) {
    setTask(event.target.value); // Update the task state with input value
  }

  // Function to handle adding a new task
  function handleNewTask(event) {
    event.preventDefault(); // Prevent default form submission behavior
    if (task.trim() === '') return; // Check if the task is not empty
    addTask(task); // Call the addTask function passed as a prop with the task value
    setTask(''); // Clear the input field by setting the task state to an empty string
  }

  return (
    // Form for adding a new task
    <form className="inputField" onSubmit={handleNewTask}>
      {/* Input field for entering task */}
      <input type="text" placeholder="Add item..." value={task} onChange={handleInputValue} />
      {/* Submit button */}
      <button type="submit">+</button>
    </form>
  );
};

export default TaskInput;
