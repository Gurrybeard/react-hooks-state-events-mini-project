import React from "react";
import Task from "./Task";

function TaskList({tasks,onDel}) {
  
  return (
    <div className="tasks">
        {/* display a list of tasks using Task component */
      tasks.map((e)=>{
        return <Task key={e.text} text={e.text} category={e.category} handleDel={onDel}/>
      })
      }
      
    </div>
  );
}

export default TaskList;
