import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Write a task and press ENTER/i);
  const checkbox = screen.getByLabelText(/Show completed items/i);
  const banner = screen.getByText(/^Tasks App/i);

  expect(inputElement).toBeInTheDocument();
  expect(checkbox).toBeInTheDocument();
  expect(banner).toBeInTheDocument();
});
