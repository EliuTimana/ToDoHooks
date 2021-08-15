import { render, screen } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

export const ClientWrapper = (children: any) => {
  const q = new QueryClient();
  return <QueryClientProvider client={q}>{children}</QueryClientProvider>;
};

test('renders app', () => {
  render(ClientWrapper(<App />));
  const inputElement = screen.getByText(/Write a task and press ENTER/i);
  const checkbox = screen.getByLabelText(/Show completed items/i);
  const banner = screen.getByText(/^Tasks App/i);

  expect(inputElement).toBeInTheDocument();
  expect(checkbox).toBeInTheDocument();
  expect(banner).toBeInTheDocument();
});
