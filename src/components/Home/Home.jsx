import { useState } from "react";
import AllTasks from "../Tasks/AllTasks";
import "./home.css";

let initTasks = [
  { taskID: "task0", value: "eat an apple", status: "active" },
  { taskID: "task1", value: "eat an orange", status: "completed" },
];

const Home = () => {
  const [activeSection, setActiveSection] = useState("all");
  const [allTasks, setAllTasks] = useState(initTasks);
  /* TODO: 1. Add Task feature
    2. Active and Completed sections
    3. Delete Task
    4. Local Storage
*/

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

  return (
    <div className="home">
      <h2>#todo</h2>
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
      <div className="container-add-task">
        <input type="text" placeholder="add details"></input>
        <button className="btn-primary">Add</button>
      </div>
      {activeSection === "all" ? (
        <AllTasks allTasks={allTasks} onTaskStatusChange={onTaskStatusChange} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
