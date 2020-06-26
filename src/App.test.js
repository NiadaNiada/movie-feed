import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders footer', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Copyright Diana Arsenii/i);
  expect(linkElement).toBeInTheDocument();
});
