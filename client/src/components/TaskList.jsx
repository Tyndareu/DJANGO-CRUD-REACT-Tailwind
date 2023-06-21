/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { GetAllTasks } from "../api/tasks.api";
import {TaskCard} from "./TaskCard";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getTasks() {
      const res = await GetAllTasks();
      setTasks(res.data);
      setIsLoading(false);
    }
    getTasks();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <h1>Tasks</h1>
        {tasks?.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    );
  }
}
