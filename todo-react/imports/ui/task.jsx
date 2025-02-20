import React from 'react';

export const Task = ({ task, onCheckBoxClick }) => {
  return (
    <li>
      <input 
        type='checkBox' 
        onClick={()=>onCheckBoxClick(task)} 
        readOnly
        checked={!!task.isChecked}
      />
      <span>{task.text}</span>

    </li>
  );
};