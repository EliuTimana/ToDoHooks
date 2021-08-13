import React, { useContext } from 'react';
import { Flex, FlexProps, Heading } from 'rebass/styled-components';
import { ToDoContext } from '../context/ToDoContext';

interface Props extends FlexProps {
  done: boolean;
}

const Container = (props: Props) => (
  <Flex
    {...props}
    py={4}
    justifyContent={'center'}
    sx={{
      backgroundColor: props.done ? 'success' : 'primary',
      transition: 'background-color 0.25s',
    }}
  />
);

export const TaskBanner = () => {
  const context = useContext(ToDoContext);
  const completedTodos = context.tasks.filter((t) => !t.done).length;
  return (
    <Container done={completedTodos === 0}>
      <Heading color={'white'} as={'h4'}>
        Tasks App ({completedTodos} tasks to do)
      </Heading>
    </Container>
  );
};
