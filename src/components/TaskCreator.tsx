import { Input } from '@rebass/forms';
import { useContext, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Box } from 'rebass';
import { addTask } from '../api';
import { ToDoContext } from '../context/ToDoContext';
import { VisibilityToggler } from './VisibilityToggler';

export const TaskCreator = () => {
  const context = useContext(ToDoContext);
  const [text, setText] = useState('');
  const queryClient = useQueryClient();
  const { mutate, isLoading, error } = useMutation('addTask', (text: string) => addTask(text), {
    onSuccess: () => {
      queryClient.invalidateQueries('listTasks');
    },
  });

  const onKeyUp = (key: string) => {
    if (key.toLowerCase() === 'enter') {
      const trimmedText = text.trim();
      if (trimmedText) {
        mutate(trimmedText);
        setText('');
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
          }}
          placeholder="Write a task and press ENTER"
          value={text}
          onKeyUp={(e: any) => onKeyUp(e.key)}
          onChange={(e: any) => setText(e.target.value)}
          disabled={isLoading}
        />
      </Box>
      {error && <Box>{error + ''}</Box>}
      <Box>
        <VisibilityToggler />
      </Box>
    </Box>
  );
};
