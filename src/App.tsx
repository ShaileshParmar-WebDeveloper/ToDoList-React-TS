import { Container } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import Add from "./component/Add";
import Display from "./component/Display";

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(1000000));
}

export type Todo = {
  id: number;
  task: string;
};

function App() {
  const defaultTodos: Array<Todo> = [
    {
      id: getRandomInt(),
      task: "Eat",
    },
    {
      id: getRandomInt(),
      task: "Sleep",
    },
    {
      id: getRandomInt(),
      task: "Code",
    },
    {
      id: getRandomInt(),
      task: "Repeat",
    },
  ];

  const [tasks, setTasks] = useState(defaultTodos);
  const [inputTask, setInputTask] = useState("");

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!inputTask) {
      alert("You can't leave inpute blank");
      return;
    }
    setTasks([
      ...tasks,
      {
        id: getRandomInt(),
        task: inputTask,
      },
    ]);
    setInputTask("");
  };

  // Delete task

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Container className="app" fixed>
      <Add
        inputTask={inputTask}
        handleInput={(taskName: string) => setInputTask(taskName)}
        handleSubmit={handleSubmit}
      />
      <Display tasks={tasks} deleteTask={deleteTask} />
    </Container>
  );
}

export default App;
