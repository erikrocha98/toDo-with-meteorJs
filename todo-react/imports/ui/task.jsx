import React from 'react';

export const Task = ({ task, onCheckBoxClick, onDeleteClick }) => {
  return (
    <li>
      <input 
        type='checkBox' 
        onClick={()=>onCheckBoxClick(task)} 
        readOnly
        checked={!!task.isChecked}
      />
      <span>{task.text}</span>
      <button onClick={()=>onDeleteClick(task)}>&times;</button>

    </li>
  );
};