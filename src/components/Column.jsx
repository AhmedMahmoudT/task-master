import { useState } from "react";
import Task, { DropIndicator } from "./Task";
import { useEffect } from "react";

/* eslint-disable react/prop-types */
const Column = ({ title, step, tasks, setTasks }) => {

  const [active, setActive] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState([])

  useEffect(() => {
    setFilteredTasks(tasks?.list?.filter(t => t.step == step))
  }, [step, tasks?.list])

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const handleDragEnd = (e) => {
    setActive(false);
    clearHighlights();

    const taskId = e.dataTransfer.getData("taskId");

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== taskId) {
      // eslint-disable-next-line no-unsafe-optional-chaining
      let copy = [...tasks?.list];

      let taskToTransfer = copy.find((t) => t.id === taskId);
      if (!taskToTransfer) return;

      taskToTransfer = { ...taskToTransfer, step };

      copy = copy.filter((t) => t.id !== taskId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(taskToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, taskToTransfer);
      }

      console.log(copy)
      setTasks(copy)
    }
  };

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("taskId", task.tId);
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();
    clearHighlights(indicators);
    const el = getNearestIndicator(e, indicators);
    el.element.style.opacity = "1";
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-step="${step}"]`));
  };

  return (
    <div className={`bg-neutral-950 h-full w-[20vw] rounded-lg flex flex-col items-center ${active && (title=="TODO"?'bg-amber-950':title=="IN PROGRESS"?'bg-cyan-950':'bg-emerald-950')}`}>
      <div className="font-bold w-full p-4">
        <div
          className={`border-2 ${
            title == "TODO" && "text-amber-500 border-amber-500"
          } ${title == "IN PROGRESS" && "text-cyan-500 border-cyan-500"} ${
            title == "DONE" && "text-emerald-500 border-emerald-500"
          } py-1 px-2 rounded w-max`}
        >
          {title}
        </div>
      </div>
      <div className={`my-4`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDragEnd}>
      {filteredTasks?.map((t) => {
          return (
            <Task
              key={t.id}
              tId={t.id}
              content={t.content}
              step={step}
              handleDragStart={handleDragStart}
            />
          );
        })}
        <DropIndicator beforeId="-1" step={step} />
      </div>
    </div>
  );
};

export default Column;
