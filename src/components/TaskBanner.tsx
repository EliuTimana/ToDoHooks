import React from 'react';
import { Flex, Heading } from 'rebass/styled-components';

type Props = {
  completedTasks: number;
};

const Container = (props: any) => (
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

export const TaskBanner = ({ completedTasks }: Props) => {
  return (
    <Container done={completedTasks === 0}>
      <Heading color={'white'} as={'h4'}>
        Tasks App ({completedTasks} tasks to do)
      </Heading>
    </Container>
  );
};
