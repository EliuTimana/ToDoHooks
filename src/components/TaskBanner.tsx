import { useContext } from 'react';
import styled from 'styled-components';
import { ToDoContext } from '../context/ToDoContext';
const H4 = styled.h4<{ completed: boolean }>`
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  font-size: calc(1.275rem + 0.3vw);
  padding: 1.5rem !important;
  text-align: center !important;
  color: #fff !important;
  transition: background-color 0.25s;
  background-color: ${(props) => (props.completed ? '#198754' : '#0d6efd')};
`;
export const TaskBanner = () => {
  const context = useContext(ToDoContext);
  const todos = context.tasks.filter((t) => !t.done).length;
  return <H4 completed={todos === 0}>Tasks App ({todos} tasks to do)</H4>;
};
