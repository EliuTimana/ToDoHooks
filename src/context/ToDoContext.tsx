import React, { Component, createContext } from 'react';

export type ToDoContextType = {
  theme: any;
  isDark: boolean;
  changeColor: () => void;
};

export const ToDoContext = createContext<ToDoContextType>({
  theme: {},
  isDark: false,
  changeColor: () => {},
});

interface State {
  light: any;
  dark: any;
  isDark: boolean;
}

export class ToDoContextProvider extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      dark: { backgroundColor: 'grey', color: 'white' },
      light: { backgroundColor: 'white', color: 'black' },
      isDark: false,
    };
  }

  changeColor = () => {
    this.setState({
      isDark: !this.state.isDark,
    });
  };

  render() {
    const theme = this.state.isDark ? this.state.dark : this.state.light;
    return (
      <ToDoContext.Provider value={{ ...this.state, theme, changeColor: this.changeColor }}>
        {this.props.children}
      </ToDoContext.Provider>
    );
  }
}
