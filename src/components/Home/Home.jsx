import {useState} from "react";
import "./home.css";

const Home = () => {
    const [activeSection, setActiveSection] = useState("all");
    return <div className="home">
        <h2>#todo</h2>
        <div className="container-switch">
            <button className={activeSection==="all"?"btn-switch active":"btn-switch"} onClick={()=>setActiveSection("all")}>All</button>
            <button className={activeSection==="active"?"btn-switch active":"btn-switch"} onClick={()=>setActiveSection("active")}>Active</button>
            <button className={activeSection==="completed"?"btn-switch active":"btn-switch"} onClick={()=>setActiveSection("completed")}>Completed</button>
        </div>
        <div className="container-add-task">
            <input type="text" placeholder="add details"></input>
            <button className="btn-primary">Add</button>
        </div>
    </div>
}

export default Home;