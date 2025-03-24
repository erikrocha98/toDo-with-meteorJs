import React, { Fragment, useState } from "react";
import { useTracker, useSubscribe} from "meteor/react-meteor-data";
import { TasksCollection } from "../api/tasksCollection.js";
import { Task } from "./Task";
import { TaskForm } from "./TaskForm";
import { Navigate, useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import { Button } from "@mui/material";
import styled from "styled-components";

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  color:hsl(234, 11%, 52%);
`
const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
`
const LogoutButton = styled(Button)`
  display: flex;
  align-self: flex-end;
  margin: 8px 16px 0;
  font-weight: bold;
`

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
    pendingTasksCount? `${pendingTasksCount} tarefas pendentes`: ''
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
    <ContainerApp>
      <ContainerMain>
          <Fragment>
            <LogoutButton onClick={logout} sx={{ color: "#D32F2F", "&:hover": { color: "#B71C1C" } }}>
              Logout
            </LogoutButton>
            
            <TaskForm/>
            <List sx={{
                      display:"flex", 
                      flexDirection:"column",
                      width:"100%",
                      padding:"50px",
                      maxWidth:"1000px",
                      margin:"0 auto",
                      }}
            >
              {tasks.map((task) => (
                <div key={task._id}>

                  <Task  
                        task={task} 
                        user={user} 
                        onCheckBoxClick={handleToggleChecked} 
                        onDeleteClick={handleDelete} 
                        onEditClick={handleEdit}
                        />
                  
                </div>
              ))}
              <div>
                {pendingTasksTitle}
                <Button onClick={()=>setHideCompleted(!hideCompleted)} sx={{ml:"20px", color:"hsl(234, 11%, 52%)", "&:hover":{color:"white"}}}>
                  {hideCompleted? 'Mostrar Tudo':'Esconder Tarefas Concluídas'}
                </Button>
              </div>
              
            </List>
            
          </Fragment>
      </ContainerMain>
    </ContainerApp>
  );
};
