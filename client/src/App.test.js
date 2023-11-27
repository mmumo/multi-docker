import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
});

test2('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}
);
