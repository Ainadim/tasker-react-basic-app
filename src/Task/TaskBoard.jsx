import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const taskDataList = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quae?",
    tags: ["JS", "React", "Next"],
    priority: "High",
    isFavorite: false,
  };

  const [tasks, setTasks] = useState([taskDataList]);

  function handleAddClickButton() {
    console.log("object");
  }

  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask></SearchTask>
          </div>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction onAddClick={handleAddClickButton}></TaskAction>
            <TaskList tasks={tasks}></TaskList>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
