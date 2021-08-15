import { Button } from '@material-ui/core';
import { Brightness4, Brightness7 } from '@material-ui/icons';
import { Component, ContextType } from 'react';
import { ToDoContext } from '../context/ToDoContext';

export class ThemeToggler extends Component {
  static contextType = ToDoContext;
  context!: ContextType<typeof ToDoContext>;

  render() {
    return (
      <ToDoContext.Consumer>
        {(context) => (
          <Button onClick={context.changeColor} startIcon={!context.isDark ? <Brightness4 /> : <Brightness7 />}>
            {!context.isDark ? 'Light' : 'Dark'}
          </Button>
        )}
      </ToDoContext.Consumer>
    );
  }
}
