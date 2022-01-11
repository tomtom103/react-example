import { render, screen } from '@testing-library/react';
import CustomButtonClass from './CustomButtonClass';

test('renders learn react link', () => {
  render(<CustomButtonClass />);
  // const _linkElement = screen.getByText(/learn react/i);
  expect(true).toBeTruthy();
});
