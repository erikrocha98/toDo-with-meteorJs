import React, { useState } from "react";
import { useTracker, useSubscribe} from "meteor/react-meteor-data";
import { TasksCollection } from "/imports/api/tasksCollection.js";
import { Task } from "./Task";
import { TaskForm } from "./TaskForm";

export const App = () => {
  const isLoading = useSubscribe("tasks");
  const[hideTask, setHideTask]=useState(false);  
  const hideTaskFilter = {isChecked: {$ne: true}};
  const tasks = useTracker(() => TasksCollection.find(hideTask? hideTaskFilter: {}, {sort:{createdAt: -1}}).fetch());


  const handleToggleChecked = ({_id, isChecked}) =>{
    Meteor.callAsync("tasks.toggledChecked", {_id, isChecked});
  }
  const handleDelete = ({_id}) =>{
    Meteor.callAsync("tasks.delete",{_id});
  }

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <header>
        <div className="app-bar">
          <div className="app-header">
            <h1>📝️ To Do List</h1>
          </div>
        </div>
      </header>
      <div className="main">
        <TaskForm/>
        <div className="filter">
          <button onClick={()=>setHideTask(!hideTask)}>
            {hideTask? 'Show All':'Hide Completed'}
          </button>
        </div>
        <ul className="tasks">
          {tasks.map((task) => (
            <Task key={task._id} task={task} onCheckBoxClick={handleToggleChecked} onDeleteClick={handleDelete}/>
          ))}
        </ul>
      </div>
    </div>
  );
};
