import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { ClientWrapper } from '../../App.test';
import { TaskCreator } from '../TaskCreator';

jest.mock('../../api');

beforeEach(cleanup);

test('clear input text when press ENTER', async () => {
  const { getByTestId } = render(ClientWrapper(<TaskCreator />));
  const input = getByTestId('input-create') as HTMLInputElement;

  fireEvent.input(input, { target: { value: 'test' } });

  expect(input.value).toBe('test');

  fireEvent.keyUp(input, { key: 'Enter' });
  await waitFor(() => {
    expect(input.value).toBe('');
  });
});
