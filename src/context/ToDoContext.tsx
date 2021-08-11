import React, { Component, createContext } from 'react';
import { Task } from '../models/models';

export type ToDoContextType = {
  theme: any;
  isDark: boolean;
  changeColor: () => void;
  tasks: Task[];
  addTask: (task: string) => void;
  deleteTask: (task: Task) => void;
  toggleTask: (task: Task) => void;
};

export const ToDoContext = createContext<ToDoContextType>({
  theme: {},
  isDark: false,
  changeColor: () => {},
  addTask: () => {},
  deleteTask: () => {},
  toggleTask: () => {},
  tasks: [],
});

interface State {
  light: any;
  dark: any;
  isDark: boolean;
  tasks: Task[];
}

export class ToDoContextProvider extends Component<any, State> {
  constructor(props: any) {
    super(props);
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
    this.state = {
      dark: { backgroundColor: 'grey', color: 'white' },
      light: { backgroundColor: 'white', color: 'black' },
      isDark: false,
      tasks: localTasks,
    };
  }

  changeColor = () => {
    this.setState({
      isDark: !this.state.isDark,
    });
  };

  addTask = (task: string) => {
    const newId = this.state.tasks.length === 0 ? 1 : Math.max(...this.state.tasks.map((t) => t.id)) + 1;
    const newTask: Task = {
      id: newId,
      description: task,
      done: false,
    };

    this.setState(
      {
        tasks: [...this.state.tasks.slice(), newTask],
      },
      () => {
        this.saveLocalTasks();
      }
    );
  };

  deleteTask = (task: Task) => {
    this.setState(
      {
        tasks: this.state.tasks.filter((t) => t.id !== task.id),
      },
      () => {
        this.saveLocalTasks();
      }
    );
  };

  toggleTask = (task: Task) => {
    this.setState(
      {
        tasks: this.state.tasks.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t)),
      },
      () => {
        this.saveLocalTasks();
      }
    );
  };

  saveLocalTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  };

  render() {
    const theme = this.state.isDark ? this.state.dark : this.state.light;
    return (
      <ToDoContext.Provider
        value={{
          ...this.state,
          theme,
          changeColor: this.changeColor,
          addTask: this.addTask,
          deleteTask: this.deleteTask,
          toggleTask: this.toggleTask,
        }}
      >
        {this.props.children}
      </ToDoContext.Provider>
    );
  }
}
