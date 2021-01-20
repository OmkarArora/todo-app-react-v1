import { useState } from "react";
import ActiveTasks from "../Tasks/ActiveTasks";
import AllTasks from "../Tasks/AllTasks";
import CompletedTasks from "../Tasks/CompletedTasks";
import "./home.css";

let initTasks = [];
if (localStorage.getItem("tasks")) {
  initTasks = JSON.parse(localStorage.getItem("tasks"));
}

const Home = () => {
  const [activeSection, setActiveSection] = useState("all");
  const [allTasks, setAllTasks] = useState(initTasks);
  const [inputValue, setInputValue] = useState("");

  const onTaskStatusChange = (id) => {
    // _alltasks= allTasks - doesn't work, this will be reference, you need a copy
    let _allTasks = [...allTasks];
    for (let i = 0; i < _allTasks.length; i++) {
      if (_allTasks[i].taskID === id) {
        if (_allTasks[i].status === "completed") _allTasks[i].status = "active";
        else _allTasks[i].status = "completed";
        break;
      }
    }
    setAllTasks(_allTasks);
  };

  let activeTasks = allTasks.filter((item) => item.status === "active");
  let completedTasks = allTasks.filter((item) => item.status === "completed");

  const deleteTask = (id) => {
    let updateTasks = [];
    for (let i = 0; i < allTasks.length; i++) {
      if (allTasks[i].taskID !== id) {
        updateTasks.push(allTasks[i]);
      }
    }
    // update taskid
    for (let i = 0; i < updateTasks.length; i++) {
      updateTasks[i].taskID = `task${i}`;
    }
    setAllTasks(updateTasks);
  };

  const deleteAllCompleted = () => {
    let updateTasks = [];
    for (let i = 0; i < allTasks.length; i++) {
      if (allTasks[i].status !== "completed") {
        updateTasks.push(allTasks[i]);
      }
    }
    // update taskid
    for (let i = 0; i < updateTasks.length; i++) {
      updateTasks[i].taskID = `task${i}`;
    }
    setAllTasks(updateTasks);
  };

  localStorage.setItem("tasks", JSON.stringify(allTasks));

  return (
    <div className="home">
      <h2 className="heading">#todo</h2>
      <div className="container-switch">
        <button
          className={
            activeSection === "all" ? "btn-switch active" : "btn-switch"
          }
          onClick={() => setActiveSection("all")}
        >
          All
        </button>
        <button
          className={
            activeSection === "active" ? "btn-switch active" : "btn-switch"
          }
          onClick={() => setActiveSection("active")}
        >
          Active
        </button>
        <button
          className={
            activeSection === "completed" ? "btn-switch active" : "btn-switch"
          }
          onClick={() => setActiveSection("completed")}
        >
          Completed
        </button>
      </div>
      {activeSection !== "completed" ? (
        <div className="container-add-task">
          <input
            type="text"
            placeholder="add details"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          ></input>
          <button
            className="btn-primary"
            onClick={() => {
              let _allTasks = [...allTasks];
              _allTasks.push({
                taskID: `task${_allTasks.length}`,
                value: inputValue,
                status: "active",
              });
              setAllTasks(_allTasks);
              setInputValue("");
            }}
          >
            Add
          </button>
        </div>
      ) : (
        <></>
      )}
      <div className="section">
        {activeSection === "all" ? (
          <AllTasks
            allTasks={allTasks}
            onTaskStatusChange={onTaskStatusChange}
          />
        ) : activeSection === "active" ? (
          <ActiveTasks tasks={activeTasks} />
        ) : (
          <CompletedTasks
            tasks={completedTasks}
            deleteTask={deleteTask}
            deleteAllCompleted={deleteAllCompleted}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
