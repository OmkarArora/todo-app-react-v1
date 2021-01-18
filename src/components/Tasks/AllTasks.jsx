import "./tasks.css";

const AllTasks = ({ allTasks, onTaskStatusChange }) => {
  return (
    <div className="container-tasks">
      {allTasks.map((item) => (
        <div className="task" key={item.taskID}>
          <input type="checkbox" onChange={() => onTaskStatusChange(item.taskID)} checked={item.status==="completed"?true:false}></input>
          <label className={item.status==="completed"?"striked":""}>{item.value}</label>
        </div>
      ))}
    </div>
  );
};

export default AllTasks;
