import { useContext } from 'react';
import styled from 'styled-components';
import { ToDoContext } from '../context/ToDoContext';
import { Task } from '../models/models';

interface Props {
  task: Task;
}

const StyledLi = styled.li<any>`
  background-color: ${(props) => (props.dark ? '#343a40' : 'white')};
  color: ${(props) => (props.dark ? 'white' : '#41464b')};
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.25s;
  &:hover {
    background-color: ${(props) => (props.dark ? '#212529' : '#f5f3f3')};
  }
`;

export const TaskRow = ({ task }: Props) => {
  const context = useContext(ToDoContext);
  return (
    <StyledLi dark={context.isDark} className={'list-group-item' + (task.done ? ' list-group-item-secondary' : '')}>
      <div onClick={() => context.toggleTask(task)}>
        <input
          className="form-check-input me-1"
          type="checkbox"
          onChange={() => context.toggleTask(task)}
          checked={task.done}
        />
        <span className={task.done ? ' text-decoration-line-through' : ''}>{task.description}</span>
      </div>
      <button type="button" onClick={() => context.deleteTask(task)} className="btn btn-danger btn-sm">
        X
      </button>
    </StyledLi>
  );
};
