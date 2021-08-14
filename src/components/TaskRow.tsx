import { Checkbox, Label } from '@rebass/forms';
import { useContext } from 'react';
import { Button, Text } from 'rebass/styled-components';
import { ToDoContext } from '../context/ToDoContext';
import { Task } from '../models/models';

interface Props {
  task: Task;
}

const StyledLi = (props: any) => (
  <Text
    {...props}
    as={'li'}
    sx={{
      cursor: 'pointer',
      transition: 'background-color 0.15s',
      ':hover': {
        backgroundColor: props.dark ? '#212529' : '#f5f3f3',
      },
      ':first-child': {
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit',
      },
      ':last-child': {
        borderBottomLeftRadius: 'inherit',
        borderBottomRightRadius: 'inherit',
      },
    }}
    px={2}
    py={2}
    bg={props.dark ? '#343a40' : 'white'}
    color={props.dark ? 'white' : '#41464b'}
    display={'flex'}
    justifyContent={'space-between'}
    alignContent={'center'}
    alignItems={'center'}
  />
);

export const TaskRow = ({ task }: Props) => {
  const context = useContext(ToDoContext);
  return (
    <StyledLi dark={context.isDark}>
      <Label sx={{ textDecorationLine: task.done ? 'line-through' : 'none', cursor: 'pointer' }}>
        <Checkbox
          id={'chk' + task.id}
          name={'chk' + task.id}
          onChange={() => context.toggleTask(task)}
          checked={task.done}
        />
        {task.description}
      </Label>
      <Button type="button" onClick={() => context.deleteTask(task)} bg={'danger'} color={'white'}>
        X
      </Button>
    </StyledLi>
  );
};
