import React, {useState}from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const  [task,setTask]= useState(TASKS);
  const [cat,setCat]=useState(CATEGORIES);
  function handleDelete(deletedText){
    setTask(task.filter((e)=> e.text !== deletedText))
    console.log(task)
  }
  const visTasks= task.filter((e)=>{
    return cat === "ALL"|| e.cat ===cat;
  });
  console.log(visTasks)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onSelect={setCat} cat={CATEGORIES} selected={cat}/>
      <NewTaskForm />
      <TaskList onDel={handleDelete} tasks={visTasks} />
    </div>
  );
}

export default App;
