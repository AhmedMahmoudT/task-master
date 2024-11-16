import StepTitle from "./StepTitle"
import Task from "./Task"
import TrashButton from "./TrashButton"

const Kanban = () => {
  return (
    <div className="w-[80vw] h-[70vh] p-5 flex items-center justify-between">
          <div className="bg-neutral-950 h-full w-[20vw] rounded-lg flex flex-col gap-5 items-center">
            <StepTitle title="TODO" />
            <Task content="Add This" />
          </div>
          <div className="bg-neutral-950 h-full w-[20vw] rounded-lg flex flex-col gap-5 items-center">
            <StepTitle title="IN PROGRESS" />
            <Task content="Do This" />
          </div>
          <div className="bg-neutral-950 h-full w-[20vw] rounded-lg flex flex-col gap-5 items-center">
            <StepTitle title="DONE" />
            <Task content="Fix That" />
          </div>
          <TrashButton />
        </div>
  )
}

export default Kanban