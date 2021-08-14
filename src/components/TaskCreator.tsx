import { Input } from '@rebass/forms';
import { useContext, useRef } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Box } from 'rebass';
import { Text } from 'rebass/styled-components';
import { addTask } from '../api';
import { ToDoContext } from '../context/ToDoContext';
import { Task } from '../models/models';
import { VisibilityToggler } from './VisibilityToggler';

export const TaskCreator = () => {
  const context = useContext(ToDoContext);
  const input = useRef<HTMLInputElement>();
  const queryClient = useQueryClient();
  const { mutate, isLoading, error, isError, reset } = useMutation<Task, any, string>(
    'addTask',
    (text) => addTask(text),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('listTasks');
        input.current!!.value = '';
        input.current?.focus();
      },
    }
  );

  const onKeyUp = (key: string) => {
    if (key.toLowerCase() === 'enter') {
      const trimmedText = input.current?.value.trim();
      if (trimmedText) {
        mutate(trimmedText);
        input.current?.focus();
      }
    }
  };

  return (
    <Box my={3}>
      <Box mb={2}>
        <Input
          type="text"
          sx={{
            '::placeholder': {
              color: context.isDark ? 'white' : 'black',
            },
            borderColor: isError ? 'red' : 'initial',
          }}
          placeholder="Write a task and press ENTER"
          ref={input}
          onKeyUp={(e: any) => onKeyUp(e.key)}
          readOnly={isLoading}
          onBlur={() => reset()}
        />
      </Box>
      {isError && (
        <Box pb={2}>
          <Text color={'danger'}>{error + ''}</Text>
        </Box>
      )}
      <Box>
        <VisibilityToggler />
      </Box>
    </Box>
  );
};
