import { useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';
import { Task } from '../models/models';

interface Props {
  task: Task;
}

export const TaskRow = ({ task }: Props) => {
  const context = useContext(ToDoContext);
  return (
    <li
      className={
        'list-group-item d-flex justify-content-between align-items-center' +
        (task.done ? ' list-group-item-secondary' : '')
      }
      style={{
        backgroundColor: context.isDark ? '#343a40' : 'white',
        color: context.isDark ? 'white' : '#41464b',
      }}
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
