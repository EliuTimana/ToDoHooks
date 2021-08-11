import { useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';

export const TaskBanner = () => {
  const context = useContext(ToDoContext);
  const todos = context.tasks.filter((t) => !t.done).length;
  return (
    <h4 className={'text-white text-center p-4' + (todos === 0 ? ' bg-success' : ' bg-primary')}>
      Tasks App ({todos} tasks to do)
    </h4>
  );
};
