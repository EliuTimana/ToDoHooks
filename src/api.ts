import { Task } from './models/models';

const delay = () => {
  return (Math.random() * 2 + 1) * 1000;
};

export const getTasks = () => {
  return new Promise<Task[]>((resolve, reject) => {
    const savedItems = localStorage.getItem('tasks');
    let localTasks: Task[] = [];
    if (savedItems) {
      localTasks = JSON.parse(savedItems);
    } else {
      localTasks = [
        { id: 1, description: 'Task 1', done: false },
        { id: 2, description: 'Task 2', done: true },
      ];
    }
    setTimeout(() => resolve(localTasks), delay());
  });
};

export const addTask = async (task: string) => {
  return new Promise<Task>(async (resolve, reject) => {
    const tasks = await getTasks();
    const newId = tasks.length === 0 ? 1 : Math.max(...tasks.map((t) => t.id)) + 1;
    const newTask: Task = {
      id: newId,
      description: task,
      done: false,
    };
    tasks.unshift(newTask);
    saveLocalTasks(tasks);
    setTimeout(() => resolve(newTask), delay());
  });
};

export const toggleTask = (taskId: number) => {
  return new Promise<void>(async (resolve, reject) => {
    const tasks = await getTasks();
    tasks.map((t) => (t.id === taskId ? { ...t, done: !t.done } : t));
    saveLocalTasks(tasks);
    setTimeout(() => resolve(), delay());
  });
};

export const deleteTask = (taskId: number) => {
  return new Promise<void>(async (resolve, reject) => {
    const tasks = await getTasks();
    saveLocalTasks(tasks.filter((t) => t.id !== taskId));
    setTimeout(() => resolve(), delay());
  });
};

const saveLocalTasks = (tasks: Task[]) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
