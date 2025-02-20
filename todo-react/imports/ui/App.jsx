import React from "react";
import { useTracker, useSubscribe} from "meteor/react-meteor-data";
import { TasksCollection } from "/imports/api/tasksCollection.js";
import { Task } from "./Task";
import { TaskForm } from "./TaskForm";

export const App = () => {
  const isLoading = useSubscribe("tasks");  
  const tasks = useTracker(() => TasksCollection.find({}, {sort:{createdAt: -1}}).fetch());
  const handleToggleChecked = ({_id, isChecked}) =>{
    Meteor.callAsync("tasks.toggledChecked", {_id, isChecked});
  }

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TaskForm/>

      <ul>
        {tasks.map((task) => (
          <Task key={task._id} task={task} onCheckBoxClick={handleToggleChecked} />
        ))}
      </ul>
    </div>
  );
};
