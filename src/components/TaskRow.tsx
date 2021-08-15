import { Checkbox, IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { deleteTask, toggleTask } from '../api';
import { ToDoContext } from '../context/ToDoContext';
import { Task } from '../models/models';

interface Props {
  task: Task;
}

export const TaskRow = ({ task }: Props) => {
  const context = useContext(ToDoContext);
  const queryClient = useQueryClient();
  const onSuccess = async () => {
    await queryClient.invalidateQueries('listTasks');
  };
  const onError = () => {
    context.hideLoading();
  };
  const { mutate: deleteMutation, isLoading: isDeleting } = useMutation((taskId: number) => deleteTask(taskId), {
    onSuccess: onSuccess,
    onError,
  });
  const { mutate: toggleMutation, isLoading: isToggling } = useMutation((taskId: number) => toggleTask(taskId), {
    onSuccess: onSuccess,
    onError,
  });

  return (
    <ListItem
      button
      disabled={isToggling || isDeleting}
      onClick={() => {
        context.showLoading();
        toggleMutation(task.id);
      }}
    >
      <ListItemIcon>
        <Checkbox edge={'start'} disabled={isToggling || isDeleting} checked={task.done} disableRipple />
      </ListItemIcon>
      <ListItemText primary={task.description} style={{ textDecorationLine: task.done ? 'line-through' : 'none' }} />
      <ListItemSecondaryAction>
        <IconButton
          edge={'end'}
          onClick={() => {
            context.showLoading();
            deleteMutation(task.id);
          }}
          disabled={isDeleting || isToggling}
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
