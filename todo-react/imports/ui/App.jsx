import React, { Fragment, useState } from "react";
import { useTracker, useSubscribe} from "meteor/react-meteor-data";
import { TasksCollection } from "../api/tasksCollection.js";
import { Task } from "./Task";
import { TaskForm } from "./TaskForm";
import { Navigate, useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import { Chip } from "@mui/material";

export const App = () => {
  const [hideCompleted, setHideCompleted] = useState(false);
  const user = useTracker(() => Meteor.user());
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const isLoading = useSubscribe("tasks");
  const hideCompletedFilter = {isChecked: {$ne: true}};
  const navigate = useNavigate();

  

  
  const tasks = useTracker(() => {
    if(!user){
      return [];
    }
    return (
      TasksCollection.find(hideCompleted? hideCompletedFilter: {}, {sort:{createdAt: -1}}).fetch()
    );
  });

  const pendingTasksCount= useTracker(()=>{
    if(!user){
      return 0;
    }
    return TasksCollection.find(hideCompletedFilter).count()
  });

  const pendingTasksTitle= `${
    pendingTasksCount? `(${pendingTasksCount})`: ''
  }`;


  const handleToggleChecked = ({_id, isChecked}) =>{
    Meteor.callAsync("tasks.toggledChecked", {_id, isChecked});
  }
  const handleDelete = ({_id}) =>{
    Meteor.callAsync("tasks.delete",{_id});
  }
  const handleEdit=({_id})=>{
    navigate(`/edit/${_id}`);
  }

  const logout = () => {
    Meteor.logout()
    setRedirectToLogin(true);
  };

  if (redirectToLogin){
    return <Navigate to="/"/>
  }


  if (isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <header>
        <div className="app-bar">
          <div className="app-header">
            <h1>
              📝️ To Do List
              {pendingTasksTitle}  
            </h1>
          </div>
        </div>
      </header>
      <div className="main">
          <Fragment>
            <div className="user" onClick={logout}>
                Log out
            </div>
            <TaskForm/>
            <div className="filter">
              <button onClick={()=>setHideCompleted(!hideCompleted)}>
                {hideCompleted? 'Show All':'Hide Completed'}
              </button>
            </div>
            <List sx={{
                      display:"flex", 
                      flexDirection:"column",
                      width:"100%",
                      maxWidth:"1000px",
                      margin:"0 auto",
                      border:"1px solid black"
                      }}
            >
              {tasks.map((task) => (
                <div>

                  <Task key={task._id} 
                        task={task} 
                        user={user} 
                        onCheckBoxClick={handleToggleChecked} 
                        onDeleteClick={handleDelete} 
                        onEditClick={handleEdit}
                        />
                  <Chip label={task.text.isPersonal? "Pessoal": "Não Pessoal"} sx={{mr:"8px"}}/>
                  <Chip label="Cadastrada"/>
                </div>
              ))}
              
            </List>
          </Fragment>
      </div>
    </div>
  );
};
