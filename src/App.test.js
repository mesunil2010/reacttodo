import { render, screen } from '@testing-library/react';
import App from './App';

test('renders empty list', () => {
  render(<App />);
  const todos = screen.getByText(/something/i);
  const button = screen.getByText(/Add/i);

  expect(todos).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  
});
