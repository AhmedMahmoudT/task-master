import { FaTrash } from "react-icons/fa";
import { motion } from "motion/react";

const TrashButton = () => {
  return (
    <motion.div variants={trashVariants} whileHover="hover" className="bg-neutral-950 h-full w-[10vw] rounded-lg flex items-center justify-center text-4xl">
      <motion.div variants={iconVariants} initial="default" whileHover="hover">
        <FaTrash />
      </motion.div>
    </motion.div>
  );
};

const trashVariants = {
  default: {

  },
  hover: {
    border:"4px solid red",
    backgroundColor: "rgba(255, 0, 0, 0.4)",
    color: "red",
  },
};

const iconVariants = {
  default: {
    rotateZ: 0,
  },
  hover: {
    rotateZ: [10, -10, 10],
    transition: {
      repeat: Infinity,
    },
  },
  
};

export default TrashButton;
