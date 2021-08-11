import { Component, ContextType } from "react";
import { ToDoContext, ToDoContextType } from "../context/ToDoContext";

export class ThemeToggler extends Component {
  static contextType = ToDoContext;
  context!: ContextType<typeof ToDoContext>;

  render() {
    return (
      <ToDoContext.Consumer>
        {(context) => (
          <button className={"btn btn-light"} onClick={context.changeColor}>
            {context.isDark ? "Light" : "Dark"}
          </button>
        )}
      </ToDoContext.Consumer>
    );
  }
}
