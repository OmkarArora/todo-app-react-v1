import "./tasks.css";
import { FaTrash } from "react-icons/fa";

const CompletedTasks = ({
  tasks,
  onTaskStatusChange,
  deleteTask,
  deleteAllCompleted,
}) => {
  return (
    <div className="container-tasks">
      {tasks.map((item) => (
        <div className="task completed" key={item.taskID}>
          <div className="task-row">
            <input
              type="checkbox"
              onChange={() => onTaskStatusChange(item.taskID)}
              checked={item.status === "completed" ? true : false}
            ></input>
            <label className="striked">{item.value}</label>
          </div>
          <div>
            <FaTrash
              className="icon trash"
              onClick={() => deleteTask(item.taskID)}
            />
          </div>
        </div>
      ))}
      {tasks.length !== 0 ? (
        <button className="btn-deleteAll" onClick={() => deleteAllCompleted()}>
          <FaTrash className="icon trash" /> delete all
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CompletedTasks;
