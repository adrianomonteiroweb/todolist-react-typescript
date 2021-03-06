import { FC, ChangeEvent, useState } from "react";

import "./App.css";
import TodoTask from "./components/TodoTask";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [dealine, setDealine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { target: { name, value } } = event;
    if (name === "task") {
      setTask(value);
    } else {
      setDealine(Number(value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, dealine: dealine };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDealine(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => task.taskName !== taskNameToDelete)
    );
  };

  return (
    <div className="App">
      <div className="header">
          <div className="inputContainer">
            <input
              type="text"
              placeholder="Task..."
              name="task"
              value={ task }
              onChange={ handleChange }
            />
            <input
              type="number"
              placeholder="Deadline (in Days)..."
              name="deadline"
              value={ dealine }
              onChange={ handleChange }
            />
          </div>
          <button
            onClick={ addTask }
          >
            Add Task
          </button>
      </div>
      <div className="todoList">
        {todoList
          .map((task: ITask, key: number) => <TodoTask key={ key } task={ task } completeTask={ completeTask } />)}
      </div>
    </div>
  );
};

export default App;