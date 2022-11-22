import React, { useState, useEffect } from "react";
import { Timer } from "./main";
export const Clockify = () => {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);
  // const [time, setTime] = useState(0);
  // const [seconds, setSeconds] = useState(0);
  // const [minutes, setMinutes] = useState(0);
  // const [hour, setHour] = useState(0);
  // const [stop, setStop] = useState(false);
  useEffect(() => {
    console.log(
      "hey i am local stoarage",
      localStorage.getItem("clockifyData")
    );
    // localStorage.clear();
    if (localStorage.getItem("clockifyData")) {
      setTasksList(JSON.parse(localStorage.getItem("clockifyData")));
    } else {
    }
  }, []);

  const handleSetTask = (event) => {
    setTask(event.target.value);
  };

  console.log("hello taskas list", tasksList);
  const handleTasksList = () => {
    let newtask = { name: task, time: <Timer /> };

    setTasksList([...tasksList, newtask]);
    localStorage.setItem("clockifyData", JSON.stringify(tasksList));
    setTask("");
  };

  return (
    <>
      <div>
        <input
          type="string"
          value={task}
          onChange={(event) => {
            handleSetTask(event);
          }}
        ></input>
        <div></div>
        <button
          onClick={() => {
            handleTasksList();
          }}
        >
          Add
        </button>
      </div>
      <div>
        <div>Dashboard</div>
        <div>
          {tasksList &&
            tasksList.map((element, index) => (
              <>
                <div>{element.name}</div>
                <div> {element.time}</div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};
