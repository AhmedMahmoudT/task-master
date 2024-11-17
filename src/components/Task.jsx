/* eslint-disable react/prop-types */
import { motion } from "motion/react"

const Task = ({content, tId, step, handleDragStart}) => {
  return (
    <>
    <DropIndicator beforeId={tId} step={step} />
    <motion.div 
    layout
    layoutId={tId} 
    draggable
    onDragStart={(e) => handleDragStart(e, {content, tId, step})}
    className={`py-5 w-[18.5vw] px-4 rounded-lg text-wrap bg-neutral-900 flex items-center cursor-grab active:cursor-grabbing`}
    >{content}</motion.div>
    </>
  )
}

const DropIndicator = ({beforeId, step}) => {
  return (
    <div 
    data-before={beforeId || '-1'}
    data-step={step}
    className={`my-0.5 h-1 rounded-full w-full ${step=="TODO"?'bg-amber-500':step=="IN_PROGRESS"?'bg-cyan-500':'bg-emerald-500'} opacity-0`} />
  )
}

export {DropIndicator}

export default Task
