import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Box, Flex } from 'rebass';
import { Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { getTasks } from './api';
import './App.scss';
import { TaskBanner } from './components/TaskBanner';
import { TaskCreator } from './components/TaskCreator';
import { TaskRow } from './components/TaskRow';
import { ThemeToggler } from './components/ThemeToggler';
import { ToDoContext } from './context/ToDoContext';

const StyledUl = styled.ul`
  padding-left: 0;
  border-radius: 0.25rem;
  margin-top: 0;
`;

const Container = (props: any) => <Box {...props} height={'100%'} overflow={'auto'} />;

export const App = () => {
  const { isLoading, data } = useQuery('listTasks', getTasks, { staleTime: 60 * 1000 });
  const ctx = useContext(ToDoContext);

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  const taskRows = () => {
    return (data || []).filter((t) => (ctx.showCompleted ? t : !t.done)).map((t) => <TaskRow key={t.id} task={t} />);
  };

  const completedTasks = () => {
    return (data || []).filter((x) => x.done).length;
  };

  return (
    <Container style={{ ...ctx.theme }}>
      <TaskBanner completedTasks={completedTasks()} />
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
