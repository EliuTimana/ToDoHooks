import React, { useEffect, useState } from 'react';
import { Task } from './models/models';
import { TaskRow } from './components/TaskRow';
import './App.scss';
import { TaskBanner } from './components/TaskBanner';
import { TaskCreator } from './components/TaskCreator';

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {id: 1, description: 'qwerty', done: false},
    {id: 2, description: 'qwerty2', done: true},
  ]);
  const [showCompleted, setShowCompleted] = useState(true);

  const toggleTask = (task: Task) => {
    setTasks(tasks.map(t => t.id === task.id ? {...t, done: !t.done} : t));
  }

  const taskRows = () => {
    return tasks
        .filter(t => showCompleted ? t : !t.done)
        .map(t => (<TaskRow key={t.id} task={t} onToggleTask={toggleTask} onDeleteItem={deleteTask}/>));
  }

  const createTask = (text: string) => {
    const newId = Math.max(...tasks.map(t => t.id)) + 1;
    const newTask: Task = {
      id: newId,
      description: text,
      done: false
    };
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (task: Task) => {
    const index = tasks.findIndex(t => t.id === task.id);
    const data = [...tasks];
    data.splice(index, 1);
    setTasks(data);
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
      <>
        <TaskBanner tasks={tasks}/>
        <div className="container">
          <TaskCreator onCreate={createTask} onToggleShow={() => setShowCompleted(!showCompleted)}/>
          <ul className="list-group">{taskRows()}</ul>
        </div>
      </>
  );
}

export default App;
