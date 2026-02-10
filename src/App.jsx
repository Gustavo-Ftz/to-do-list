import { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [userTask, setUserTask] = useState("");
  const [userDescription, setUserDescription] = useState("");

  function addTask() {
    const newTask = {
      id: Date.now(),
      name: userTask,
      description: userDescription,
      isDone: false,
    };

    if (userTask.trim() === "") {
      alert("A tarefa não pode estar vazia!");
    } else {
      setTasks([...tasks, newTask]);
    }
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function doneTask(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task,
    );

    setTasks(updatedTasks);
  }

  // function doneTask(id) {
  //   tasks.map((task) => {
  //     const [newTask, setNewTask] = useState({
  //       id: task.id,
  //       name: task.name,
  //       description: task.description,
  //       status: true,
  //     });

  //     setTasks(...tasks, newTask);
  //   });
  // }

  return (
    <>
      <Tasks
        tasks={tasks}
        userTask={userTask}
        setUserTask={setUserTask}
        userDescription={userDescription}
        setUserDescription={setUserDescription}
        addTask={addTask}
        removeTask={removeTask}
        doneTask={doneTask}
      />
    </>
  );
}

export default App;
