import React, { Component, createContext } from 'react';

export type ToDoContextType = {
  theme: any;
  isDark: boolean;
  isLoading: boolean;
  showCompleted: boolean;
  changeColor: () => void;
  toggleCompletedVisibility: () => void;
  showLoading: () => void;
  hideLoading: () => void;
};

export const ToDoContext = createContext<ToDoContextType>({
  theme: {},
  isDark: false,
  isLoading: false,
  showCompleted: true,
  changeColor: () => {},
  toggleCompletedVisibility: () => {},
  showLoading: () => {},
  hideLoading: () => {},
});

interface State {
  light: any;
  dark: any;
  isDark: boolean;
  showCompleted: boolean;
  isLoading: boolean;
}

export class ToDoContextProvider extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      dark: { backgroundColor: 'grey', color: 'white' },
      light: { backgroundColor: 'white', color: 'black' },
      isDark: false,
      isLoading: false,
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
  showLoading = () => {
    this.setState({
      isLoading: true,
    });
  };
  hideLoading = () => {
    this.setState({
      isLoading: false,
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
          showLoading: this.showLoading,
          hideLoading: this.hideLoading,
        }}
      >
        {this.props.children}
      </ToDoContext.Provider>
    );
  }
}
