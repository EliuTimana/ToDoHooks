import React from 'react';
import { Flex, Heading } from 'rebass/styled-components';

type Props = {
  uncompletedTasks: number;
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

export const TaskBanner = ({ uncompletedTasks }: Props) => {
  return (
    <Container done={uncompletedTasks === 0}>
      <Heading color={'white'} as={'h4'}>
        Tasks App ({uncompletedTasks} tasks to do)
      </Heading>
    </Container>
  );
};
