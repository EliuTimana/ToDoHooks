import React, { useContext } from 'react';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import './App.scss';
import { TaskBanner } from './components/TaskBanner';
import { TaskCreator } from './components/TaskCreator';
import { TaskRow } from './components/TaskRow';
import { ThemeToggler } from './components/ThemeToggler';
import { ToDoContext } from './context/ToDoContext';

const StyledUl = styled.ul`
  padding-left: 0;
  border-radius: 0.25rem;
`;

const Container = (props: any) => <Box {...props} height={'100%'} overflow={'auto'} />;

export const App = () => {
  const ctx = useContext(ToDoContext);

  const taskRows = () => {
    return ctx.tasks.filter((t) => (ctx.showCompleted ? t : !t.done)).map((t) => <TaskRow key={t.id} task={t} />);
  };

  return (
    <Container style={{ ...ctx.theme }}>
      <TaskBanner />
      <Flex width={['100%', '90%']} flexDirection={'column'} mx={'auto'} p={3}>
        <TaskCreator />
        <StyledUl>{taskRows()}</StyledUl>

        <Flex justifyContent={'flex-end'} mb={3}>
          <ThemeToggler />
        </Flex>
      </Flex>
    </Container>
  );
};

export default App;
