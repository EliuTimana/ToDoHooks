import React, { useContext, useState } from 'react';
import './App.scss';
import { TaskBanner } from './components/TaskBanner';
import { TaskCreator } from './components/TaskCreator';
import { TaskRow } from './components/TaskRow';
import { ThemeToggler } from './components/ThemeToggler';
import { ToDoContext } from './context/ToDoContext';

export const App = () => {
  const ctx = useContext(ToDoContext);
  const [showCompleted, setShowCompleted] = useState(true);

  const taskRows = () => {
    return ctx.tasks.filter((t) => (showCompleted ? t : !t.done)).map((t) => <TaskRow key={t.id} task={t} />);
  };

  return (
    <div style={{ ...ctx.theme, ...{ height: '100vh' } }}>
      <TaskBanner />
      <div className="container">
        <TaskCreator onToggleShow={() => setShowCompleted(!showCompleted)} />
        <ul className="list-group mb-2">{taskRows()}</ul>

        <div className="d-flex justify-content-end">
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
};

export default App;
