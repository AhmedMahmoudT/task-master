import { FaGithub } from "react-icons/fa6"
import Kanban from "./components/Kanban"

function App() {

  return (
    <div className="min-h-screen bg-black text-white flex">
      <a href="https://github.com/AhmedMahmoudT/task-master" target="_blank" className="fixed top-8 right-8 text-4xl">
        <FaGithub />
      </a>
      <div className="m-auto flex flex-col gap-10 items-center justify-center">
        <h1 className="text-6xl font-light select-none">Task Master</h1>
        <Kanban />
      </div>
    </div>
  )
}

export default App

