"use client";

import { useState } from "react";

// Define types for task and task list
interface Task {
  id: number;
  text: string;
}

export default function TodoList() {
  // State for managing tasks
  const [tasks, setTasks] = useState<Task[]>([]);
  // State for managing input value
  const [inputValue, setInputValue] = useState<string>("");

  // Function to handle adding a task
  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      const newTask: Task = {
        id: tasks.length + 1,
        text: inputValue.trim(),
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  // Function to handle deleting a task
  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center justify-center space-x-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a task"
        className="mt-2 border border-gray-600 p-2 rounded-md"
      />
      <button
        onClick={handleAddTask}
        className="mt-2 border border-gray-600 p-2 rounded-md"
      >
        Add Task
      </button>
      <ul className="mt-2">
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button
              onClick={() => handleDeleteTask(task.id)}
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
