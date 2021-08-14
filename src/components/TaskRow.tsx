import { Checkbox, Label } from '@rebass/forms';
import { darken, lighten } from 'polished';
import { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Button, ButtonProps, Text } from 'rebass/styled-components';
import { useTheme } from 'styled-components';
import { deleteTask, toggleTask } from '../api';
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

const DeleteButton = (props: ButtonProps) => {
  const theme = useTheme() as any;
  return (
    <Button
      {...props}
      variant={'danger'}
      minWidth={35}
      minHeight={35}
      mr={3}
      sx={{
        cursor: props.disabled ? 'not-allowed' : 'pointer',
        borderRadius: '50%',
        backgroundColor: props.disabled ? lighten(0.07, theme.colors.danger) : 'danger',
        '&:hover': {
          backgroundColor: props.disabled ? lighten(0.07, theme.colors.danger) : darken(0.07, theme.colors.danger),
        },
      }}
      p={0}
      fontSize={'1.8rem'}
    />
  );
};

export const TaskRow = ({ task }: Props) => {
  const context = useContext(ToDoContext);
  const queryClient = useQueryClient();
  const invalidate = () => queryClient.invalidateQueries('listTasks');
  const { mutate: deleteMutation, isLoading: isDeleting } = useMutation((taskId: number) => deleteTask(taskId), {
    onSuccess: invalidate,
  });
  const { mutate: toggleMutation, isLoading: isToggling } = useMutation((taskId: number) => toggleTask(taskId), {
    onSuccess: invalidate,
  });

  return (
    <StyledLi dark={context.isDark}>
      <Label px={3} py={3} sx={{ textDecorationLine: task.done ? 'line-through' : 'none', cursor: 'pointer' }}>
        <Checkbox
          id={'chk' + task.id}
          name={'chk' + task.id}
          onChange={() => toggleMutation(task.id)}
          checked={task.done}
          disabled={isToggling || isDeleting}
        />
        {task.description}
      </Label>
      <DeleteButton
        type="button"
        onClick={() => {
          deleteMutation(task.id);
        }}
        disabled={isDeleting || isToggling}
      >
        &times;
      </DeleteButton>
    </StyledLi>
  );
};
