"use client";

import { useState } from "react";

type Props = {
  id: number;
  text: string;
  done: boolean;
};

export default function TodoList() {
  const [tasks, setTasks] = useState<Props[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObject: Props = {
        id: tasks.length + 1,
        text: newTask,
        done: false,
      };

      setTasks([...tasks, newTaskObject]);
      setNewTask("");
    }
  };

  const markAsDone = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );

    setTasks(updatedTasks);
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="space-x-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="border border-gray-600 p-2 rounded-md"
        />
        <button
          onClick={addTask}
          className="border border-gray-600 p-2 rounded-md"
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button
              onClick={() => deleteTask(task.id)}
              className="border border-gray-600 p-2 rounded-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
