import React, { useState } from "react";
import { Timer } from "./main";
export const Clockify = () => {
  const [taskValue, settaskvalue] = useState("");
  const [tasksList, setTasksLists] = useState([]);
  const handleTasksList = () => {
    let newtask = { taskName: taskValue, timer: <Timer /> };
    settaskvalue("");
    setTasksLists([...tasksList, newtask]);
  };

  const handleDelete = (indexToDelete)=>{
  let newTaskList=tasksList.filter((element,index)=>{
    if(index!=indexToDelete){
      return element
    }
  })
  setTasksLists(newTaskList)
  }
  return (
    <div>
      <button onClick={() => handleTasksList()}>Add Task</button>
      <input
        type="string"
        value={taskValue}
        onChange={(event) => settaskvalue(event.target.value)}
      />
      <div>DashBoard</div>
      {tasksList &&
        tasksList.map((element, index) => (
          <div key={index+3}>
            {" "}
            <div>
              {element.taskName}
              {element.timer}
            </div>
            <button onClick={()=>handleDelete(index)}>Delete</button>
          </div>
        ))}
    </div>
  );
};
