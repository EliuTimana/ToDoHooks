import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { TaskCreator } from './TaskCreator';

test('clear input text when press ENTER', () => {
  render(<TaskCreator />);

  const input = screen.getByPlaceholderText('Write a task and press ENTER') as HTMLInputElement;
  fireEvent.input(input, { target: { value: 'test' } });
  expect(input.value).toBe('test');
  fireEvent.keyUp(input, { key: 'Enter' });
  expect(input.value).toBe('');
});
