import Task from "./Task";
import { Tasks } from "../data";
const TaskList = () => {
  return (
    <main className="font-light bg-slate-950 mt-2 px-5 py-8">
      <h1 className="text-white text-xl font-bold">Tasks to Complete</h1>
      {Tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </main>
  );
};

export default TaskList;
