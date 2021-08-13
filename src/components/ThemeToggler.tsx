import { Component, ContextType } from 'react';
import { Button } from 'rebass/styled-components';
import { ToDoContext } from '../context/ToDoContext';

export class ThemeToggler extends Component {
  static contextType = ToDoContext;
  context!: ContextType<typeof ToDoContext>;

  render() {
    return (
      <ToDoContext.Consumer>
        {(context) => (
          <Button color={'white'} onClick={context.changeColor}>
            {context.isDark ? 'Light' : 'Dark'}
          </Button>
        )}
      </ToDoContext.Consumer>
    );
  }
}
