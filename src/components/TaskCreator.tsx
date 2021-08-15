import {
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { useContext, useRef } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addTask } from '../api';
import { ToDoContext } from '../context/ToDoContext';
import { Task } from '../models/models';
import { VisibilityToggler } from './VisibilityToggler';

export const TaskCreator = () => {
  const context = useContext(ToDoContext);
  const input = useRef<HTMLInputElement>();
  const queryClient = useQueryClient();
  const onError = () => {
    context.hideLoading();
  };
  const { mutate, isLoading, error, isError, reset } = useMutation<Task, any, string>(
    'addTask',
    (text) => addTask(text),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries('listTasks');
        input.current!!.value = '';
        setTimeout(() => {
          input.current!!.focus();
        });
      },
      onError,
    }
  );

  const onKeyUp = (key: string) => {
    if (key.toLowerCase() === 'enter') {
      const trimmedText = input.current?.value.trim();
      if (trimmedText) {
        mutate(trimmedText);
        context.showLoading();
        input.current?.focus();
      }
    }
  };

  const clearAll = () => {
    input.current!!.value = '';
    input.current?.focus();
    reset();
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormControl error={isError} fullWidth variant={'outlined'}>
          <InputLabel htmlFor="input-create">Write a task and press ENTER</InputLabel>
          <OutlinedInput
            id={'input-create'}
            type="text"
            inputRef={input}
            onKeyUp={(e: any) => onKeyUp(e.key)}
            disabled={isLoading}
            autoComplete={'off'}
            autoFocus
            endAdornment={
              input.current?.value && (
                <InputAdornment position={'end'}>
                  <IconButton disabled={isLoading} onClick={() => clearAll()}>
                    <Clear />
                  </IconButton>
                </InputAdornment>
              )
            }
            labelWidth={215}
          />
          {error && <FormHelperText>{error + ''}</FormHelperText>}
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <VisibilityToggler />
      </Grid>
    </Grid>
  );
};
