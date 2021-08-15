import { LinearProgress, List } from '@material-ui/core';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Box, Flex } from 'rebass';
import { getTasks } from './api';
import './App.scss';
import { TaskBanner } from './components/TaskBanner';
import { TaskCreator } from './components/TaskCreator';
import { TaskRow } from './components/TaskRow';
import { ThemeToggler } from './components/ThemeToggler';
import { ToDoContext } from './context/ToDoContext';

const Container = (props: any) => <Box {...props} height={'100%'} overflow={'auto'} />;

export const App = () => {
  const ctx = useContext(ToDoContext);
  const { isLoading, data } = useQuery('listTasks', getTasks, {
    staleTime: 60 * 1000,
    onSuccess: () => {
      ctx.hideLoading();
    },
    onError: () => {
      ctx.hideLoading();
    },
  });

  const taskRows = () => {
    return (data || []).filter((t) => (ctx.showCompleted ? t : !t.done)).map((t) => <TaskRow key={t.id} task={t} />);
  };

  const uncompletedTasks = () => {
    return (data || []).filter((x) => !x.done).length;
  };

  return (
    <Container style={{ ...ctx.theme }}>
      <TaskBanner uncompletedTasks={uncompletedTasks()} />
      <Flex width={['100%', '90%']} flexDirection={'column'} mx={'auto'} p={3}>
        <TaskCreator />
        <LinearProgress
          variant={'indeterminate'}
          style={{ visibility: ctx.isLoading || isLoading ? 'visible' : 'hidden' }}
        />
        <List>{taskRows()}</List>

        <Flex justifyContent={'flex-end'} mb={3}>
          <ThemeToggler />
        </Flex>
      </Flex>
    </Container>
  );
};

export default App;
