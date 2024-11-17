import { FaTrash } from "react-icons/fa";
import { motion } from "motion/react";
import { useState } from "react";

const MoveToTrash = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsHovered(true);
  };

  return (
    <motion.div onDragOver={handleDragOver} onDragLeave={() => setIsHovered(false)} onDrop={() => setIsHovered(false)}
    variants={trashVariants} initial="default" animate={isHovered ? "hover" : "default"} className="h-full w-[10vw] rounded-lg flex items-center justify-center text-4xl">
      <motion.div variants={iconVariants}>
        <FaTrash />
      </motion.div>
    </motion.div>
  );
};

const trashVariants = {
  default: {
    backgroundColor: "#0a0a0a",
  },
  hover: {
    border:"4px solid red",
    backgroundColor: "#FF000066",
    color: "#FF0000",
  },
};

const iconVariants = {
  default: {
    rotateZ: 0,
  },
  hover: {
    rotateZ: [0,10, -10, 10,0],
    transition: {
      repeat: Infinity,
    },
  },
  
};

export default MoveToTrash;
