import { Container } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
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
  const [errAlert, setErrAlert] = useState(false);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!inputTask) {
      setErrAlert(true);
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

  // handleInput
  const handleInput = (taskName: string) => {
    setInputTask(taskName);
    if (errAlert) {
      setErrAlert(false);
    }
  };

  return (
    <Container className="app" fixed>
      <Add
        inputTask={inputTask}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
      {errAlert && (
        <Alert variant="outlined" className="alertclass" severity="error">
          You can't leave inpute blank!
        </Alert>
      )}
      <Display tasks={tasks} deleteTask={deleteTask} />
    </Container>
  );
}

export default App;
