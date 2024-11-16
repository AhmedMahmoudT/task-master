import { FaTrash } from "react-icons/fa"
import { motion } from "motion/react"

function App() {

  return (
    <div className="min-h-screen bg-black text-white flex">
      <div className="m-auto flex flex-col gap-10 items-center justify-center">
        <h1 className="text-6xl font-light">Task Master</h1>
        <div className="w-[80vw] h-[60vh]p-5 flex items-center justify-between">
          <div className="bg-neutral-950 h-[55vh] w-[20vw] rounded-lg"></div>
          <div className="bg-neutral-950 h-[55vh] w-[20vw] rounded-lg"></div>
          <div className="bg-neutral-950 h-[55vh] w-[20vw] rounded-lg"></div>
          <div className="border-4 border-red-500 h-[55vh] w-[10vw] rounded-lg flex items-center justify-center text-4xl bg-red-500/40 text-red-500">
            <motion.div variants={trashVariants} initial="default" animate="hover">
            <FaTrash />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

const trashVariants = {
  default: {
    rotateZ: 0,
  },
  hover: {
    rotateZ: [10,-10,10],
    transition: {
      repeat: Infinity,
    }
  },
}

export default App

