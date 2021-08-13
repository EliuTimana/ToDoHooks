import React, { useContext } from 'react';
import './App.scss';
import { TaskBanner } from './components/TaskBanner';
import { TaskCreator } from './components/TaskCreator';
import { TaskRow } from './components/TaskRow';
import { ThemeToggler } from './components/ThemeToggler';
import { ToDoContext } from './context/ToDoContext';

export const App = () => {
  const ctx = useContext(ToDoContext);

  const taskRows = () => {
    return ctx.tasks.filter((t) => (ctx.showCompleted ? t : !t.done)).map((t) => <TaskRow key={t.id} task={t} />);
  };

  return (
    <div style={{ ...ctx.theme, ...{ height: '100%', overflow: 'auto' } }}>
      <TaskBanner />
      <div className="container">
        <TaskCreator />
        <ul className="list-group mb-2">{taskRows()}</ul>

        <div className="d-flex justify-content-end mb-3">
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
};

export default App;
