import "./tasks.css";

const ActiveTasks = ({ tasks, onTaskStatusChange }) => {
  return (
    <div className="container-tasks">
      {tasks.map((item) => (
        <div className="task" key={item.taskID}>
          <input type="checkbox" onChange={() => onTaskStatusChange(item.taskID)} checked={item.status==="completed"?true:false}></input>
          <label>{item.value}</label>
        </div>
      ))}
    </div>
  );
};

export default ActiveTasks;
