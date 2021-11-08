import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task: { taskName, dealine }, completeTask}: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{ taskName }</span>
        <span>{ dealine }</span>
      </div>
      <button
        onClick={ () => completeTask(taskName) }
      >
        X
      </button>
    </div>
    );
};

export default TodoTask;
