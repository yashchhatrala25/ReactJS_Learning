/* 
- import useState from react
- call useState inside our function with an initial value
- get back two things in our array
- use array destructuring to unpack those two things
- use them to make our UI interactive

const [something, setSomething] = useState(initialValue);

*/

import React, { useState } from "react";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const remainingTasks = totalTasks - completedTasks;

  const completedPercentage =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const handleAddTask = () => {
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    if (newTask.trim()) {
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        // if this is the task we want to toggle
        if (task.id === id) {
          // create new task object with completed flipped
          return { ...task, completed: !task.completed };
        }

        // otherwise return the task unchanges
        return task;
      }),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>My Task List</h1>
      <div
        style={{
          backgroundColor: "#F0F0F0",
          padding: "10px",
          margin: "10px 0",
          borderRadius: "5px",
        }}
      >
        <h3>Task Statistics</h3>
        <p>Total Tasks: {totalTasks}</p>
        <p>Completed Tasks: {completedTasks}</p>
        <p>Remaining Tasks: {remainingTasks}</p>

        <div
          style={{
            width: "100%",
            height: "20px",
            backgroundColor: "#ddd",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${completedPercentage}%`,
              height: "100%",
              backgroundColor: "#4caf50",
              transition: "width 0.3s ease",
            }}
          ></div>
        </div>
        <p>Progress: {completedPercentage}%</p>
      </div>
      <input
        placeholder="Enter a task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
