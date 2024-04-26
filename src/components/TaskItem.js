import React from 'react';
import { MdDeleteSweep } from 'react-icons/md';

const TaskItem = ({ task, deleteTask, toggleCheck }) => {
  return (
    <li className='items'>
      {/* Task text and checkbox */}
      <div className='items-text'>
        <input
          type='checkbox'
          checked={task.checked}
          onClick={() => toggleCheck(task.taskName)}
        />
        <p className={task.checked ? 'isChecked' : ''}>{task.taskName}</p>
      </div>
      {/* Delete button */}
      <MdDeleteSweep
        className='delete-icon'
        onClick={() => deleteTask(task.taskName)}
      />
    </li>
  );
};

export default TaskItem;
