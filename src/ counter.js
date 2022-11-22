import React from "react";
import Styles from "./counter.module.scss";
class Jira extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { stage: 0, name: "task1" },
        { stage: 0, name: "task2" },
        { stage: 0, name: "task3" },
      ],
      taskName: "",
    };
  }
  handleSearchBox = (value) => {
    this.setState({ taskName: value });
  };
  handleAddTasks = (value) => {
    let newTask = { stage: 0, name: value };
    this.setState({ tasks: [...this.state.tasks, newTask] });
    this.state.taskName = "";
  };
  handleMoveTasks = (indexValue, stageNumber) => {
    this.setState((current) => {
      let l = current.tasks.map((element, index) => {
        if (index === indexValue) {
          return { ...element, stage: stageNumber };
        }
        return element;
      });
      //  console.log("hello", { ...current, tasks: l });
      return { ...current, tasks: l };
    });
  };

  render() {
    return (
      <div className={`${Styles["Jira-board"]}`}>
        <div className={`${Styles["input-box"]}`}>
          {" "}
          <input
            type="text"
            placeholder="Add task"
            value={this.state.taskName}
            onChange={(event) => this.handleSearchBox(event.target.value)}
          ></input>
          <button onClick={() => this.handleAddTasks(this.state.taskName)}>
            Add Task
          </button>
        </div>
        <div className={`${Styles["tasks-container-box"]}`}>
          <div className={`${Styles["small-tasks-container"]}`}>
            Backlog
            {this.state.tasks &&
              this.state.tasks.map((element, index) => {
                return element.stage === 0 ? (
                  <div
                    key={index}
                    className={`${Styles["tasks-div"]}`}
                    onClick={() => this.handleMoveTasks(index, 1)}
                  >
                    {element.name}
                  </div>
                ) : null;
              })}
          </div>
          <div className={`${Styles["small-tasks-container"]}`}>
            Progress
            {this.state.tasks &&
              this.state.tasks.map((element, index) => {
                return element.stage === 1 ? (
                  <div
                    key={index}
                    className={`${Styles["tasks-div"]}`}
                    onClick={() => this.handleMoveTasks(index, 2)}
                  >
                    {element.name}
                  </div>
                ) : null;
              })}
          </div>
          <div className={`${Styles["small-tasks-container"]}`}>
            Completed
            {this.state.tasks &&
              this.state.tasks.map((element, index) => {
                return element.stage === 2 ? (
                  <div
                    key={index}
                    className={`${Styles["tasks-div"]}`}
                    onClick={() => this.handleMoveTasks(index)}
                  >
                    {element.name}
                  </div>
                ) : null;
              })}
          </div>
        </div>
      </div>
    );
  }
}
export default Jira;
