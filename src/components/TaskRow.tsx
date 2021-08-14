import { Checkbox, Label } from '@rebass/forms';
import { darken } from 'polished';
import { useContext } from 'react';
import { Button, Text } from 'rebass/styled-components';
import { useTheme } from 'styled-components';
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
      border: '1px solid rgba(0,0,0,0.125)',
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
      '&+&': {
        borderTopWidth: 0,
      },
    }}
    bg={props.dark ? '#343a40' : 'white'}
    color={props.dark ? 'white' : '#41464b'}
    display={'flex'}
    justifyContent={'space-between'}
    alignContent={'center'}
    alignItems={'center'}
  />
);

const DeleteButton = (props: any) => {
  const theme = useTheme() as any;
  return (
    <Button
      {...props}
      variant={'danger'}
      minWidth={35}
      minHeight={35}
      mr={3}
      sx={{
        cursor: 'pointer',
        borderRadius: '50%',
        '&:hover': {
          backgroundColor: darken(0.07, theme.colors.danger),
        },
      }}
      p={0}
      fontSize={'1.8rem'}
    />
  );
};

export const TaskRow = ({ task }: Props) => {
  const context = useContext(ToDoContext);
  return (
    <StyledLi dark={context.isDark}>
      <Label px={3} py={3} sx={{ textDecorationLine: task.done ? 'line-through' : 'none', cursor: 'pointer' }}>
        <Checkbox
          id={'chk' + task.id}
          name={'chk' + task.id}
          onChange={() => context.toggleTask(task)}
          checked={task.done}
        />
        {task.description}
      </Label>
      <DeleteButton type="button" onClick={() => context.deleteTask(task)}>
        &times;
      </DeleteButton>
    </StyledLi>
  );
};
