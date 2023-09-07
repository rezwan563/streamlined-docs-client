import { render, screen } from '@testing-library/react';
import MyComponent from '../homepage/Homepage'; // import your component to test

test('it should render a button', () => {
  render(<MyComponent />);
  const button = screen.getByText('/learn more/i');
  expect(button).toBeInTheDocument();
});
