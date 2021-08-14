import React, { Component, createContext } from 'react';

export type ToDoContextType = {
  theme: any;
  isDark: boolean;
  showCompleted: boolean;
  changeColor: () => void;
  toggleCompletedVisibility: () => void;
};

export const ToDoContext = createContext<ToDoContextType>({
  theme: {},
  isDark: false,
  showCompleted: true,
  changeColor: () => {},
  toggleCompletedVisibility: () => {},
});

interface State {
  light: any;
  dark: any;
  isDark: boolean;
  showCompleted: boolean;
}

export class ToDoContextProvider extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      dark: { backgroundColor: 'grey', color: 'white' },
      light: { backgroundColor: 'white', color: 'black' },
      isDark: false,
      showCompleted: true,
    };
  }

  changeColor = () => {
    this.setState({
      isDark: !this.state.isDark,
    });
  };

  toggleCompletedVisibility = () => {
    this.setState({
      showCompleted: !this.state.showCompleted,
    });
  };

  render() {
    const theme = this.state.isDark ? this.state.dark : this.state.light;
    return (
      <ToDoContext.Provider
        value={{
          ...this.state,
          theme,
          changeColor: this.changeColor,
          toggleCompletedVisibility: this.toggleCompletedVisibility,
        }}
      >
        {this.props.children}
      </ToDoContext.Provider>
    );
  }
}
