import { useState } from "react";
import Column from "./Column"
import MoveToTrash from "./MoveToTrash"

const Kanban = () => {

  const [tasks, setTasks] = useState({list:[
    {id:1, content:"Task 1", step:"TODO"},
    {id:2, content:"Add this", step:"IN_PROGRESS"},
    {id:3, content:"Task 3", step:"DONE"},
  ]});

  return (
    <div className="w-[80vw] h-[70vh] p-5 flex items-center justify-between">
          <Column title="TODO" step="TODO" tasks={tasks} setTasks={setTasks}/>
          <Column title="IN PROGRESS" step="IN_PROGRESS" tasks={tasks} setTasks={setTasks}/>
          <Column title="DONE" step="DONE" tasks={tasks} setTasks={setTasks}/>
          <MoveToTrash />
        </div>
  )
}

export default Kanban