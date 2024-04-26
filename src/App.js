import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

function App() {
  // State to manage the to-do list
  const [toDoList, setToDoList] = useState([]);

  // Function to add a new task to the to-do list
  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  // Function to delete a task from the to-do list
  const deleteTask = (deleteTaskName) => {
    setToDoList(toDoList.filter(task => task.taskName !== deleteTaskName));
  };

  // Function to toggle the completion status of a task
  const toggleCheck = (taskName) => {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <div className='container'>
      <h1>Task Master</h1>
      {/* Task input component for adding new tasks */}
      <TaskInput addTask={addTask} />

      <div className='toDoList'>
        <span>To do</span>
        <ul className='list-items'>
          {/* Map over the to-do list and render each task item */}
          {toDoList.map((task, key) => (
            <TaskItem
              key={key}
              task={task}
              deleteTask={deleteTask}
              toggleCheck={toggleCheck}
            />
          ))}
        </ul>
        {/* Render a message if there are no tasks */}
        {toDoList.length === 0 ? <p className="notify">You are done!</p> : null}
      </div>
    </div>
  );
}

export default App;
