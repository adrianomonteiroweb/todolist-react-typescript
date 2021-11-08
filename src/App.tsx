import {FC, ChangeEvent, useState } from 'react';

import './App.css';
import { ITask } from './interfaces';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [dealine, setDealine] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === 'task') {
      setTask(e.target.value);
    } else {
      setDealine(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, dealine: dealine };
    setTodo([...todo, newTask]);
    setTask('');
    setDealine(0);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="task"
            value={task}
            placeholder="Task..."
            onChange={handleChange}
          />
          <input
            type="number"
            name="dealine"
            value={dealine}
            placeholder="Dealine (in days) ..."
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
