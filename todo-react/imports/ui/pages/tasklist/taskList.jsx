import React from "react";

export function TaskList (){
    return (
        <div className="main">
        {user ? (
          <Fragment>
            <div className="user" onClick={logout}>
                {user.username};
            </div>
            <TaskForm/>
            <div className="filter">
              <button onClick={()=>setHideCompleted(!hideCompleted)}>
                {hideCompleted? 'Show All':'Hide Completed'}
              </button>
            </div>
            <ul className="tasks">
              {tasks.map((task) => (
                <Task key={task._id} task={task} onCheckBoxClick={handleToggleChecked} onDeleteClick={handleDelete}/>
              ))}
            </ul>
          </Fragment>
        ): (
          <LoginForm/>
        )}
      </div>
    );
}