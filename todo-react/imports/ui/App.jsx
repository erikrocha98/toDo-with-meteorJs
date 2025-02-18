import React from 'react';
import { Task } from './task';

const tasks = [
  {id:1, text: 'First task'},
  {id:2, text: 'First task'},
  {id:3, text: 'First task'},
  {id:4, text: 'First task'},
  {id:5, text: 'First task'},
]
export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <ul>
      {tasks.map((task)=> <Task key={task.id} task={task.text}/>)}
    </ul>

    
    
  </div>
);
