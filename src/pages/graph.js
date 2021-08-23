import Header from "../visualize/Header";
import { useState } from "react";
import Add from "../visualize/Add";
import saveTask from "../graph/save";
import BarGraph from "../graph/BarGraph";

//import taskSaved from "./backend/display";

//import './App.css';
// import React from 'react';

export default function Graphs() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
  ]);

  //Add Task
  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 100000000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    // console.log(task.text);
    //console.log(task.reminder);
    const pid = id.toString();
    console.log(pid);
    console.log(task.name, task.location);
    saveTask(
      pid,
      task.Name,
      task.Task,
      task.Time,
      task.Location,
      task.Date,
      task.Description,
      task.geolocation
    );
  };

  return (
    <div className="Container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <Add onAdd={addTask} />}
      {"your task will be submitted to the coordinator!"}
      <BarGraph />
    </div>
  );
}


