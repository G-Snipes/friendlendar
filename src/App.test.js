import { render, screen } from '@testing-library/react';
import { Calendar } from 'react-calendar';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  
  const linkElement = screen.getByText(/2022/i);
  expect(linkElement).toBeInTheDocument();
});
