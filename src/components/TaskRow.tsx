import { useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';
import { Task } from '../models/models';

interface Props {
  task: Task;

  onToggleTask(task: Task): void;

  onDeleteItem(task: Task): void;
}

export const TaskRow = ({ task, onToggleTask, onDeleteItem }: Props) => {
  const context = useContext(ToDoContext);
  return (
    <li
      className={
        'list-group-item d-flex justify-content-between align-items-center' +
        (task.done ? ' list-group-item-secondary' : '')
      }
    >
      <div>
        <input
          className="form-check-input me-1"
          type="checkbox"
          onChange={() => context.toggleTask(task)}
          checked={task.done}
        />
        <span className={task.done ? ' text-decoration-line-through' : ''}>{task.description}</span>
      </div>
      <button type="button" onClick={() => context.deleteTask(task)} className="btn btn-danger btn-sm">
        X
      </button>
    </li>
  );
};
