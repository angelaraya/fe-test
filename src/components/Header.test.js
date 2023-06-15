import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders cart element', () => {
  render(<Header cartCount={0}/>);
  const divElement = screen.getByTestId('cart-badge');
  expect(divElement).toBeInTheDocument();
});

test('does not render the badge when the count is 0', () => {
  render(<Header cartCount={0} />);
  const divElement = screen.getByTestId('cart-badge');
  // console.log(divElement);
  expect(divElement).toHaveTextContent('');
})

test('render the badge when the count is larger than 0', () => {
  render(<Header cartCount={8} />);
  const divElement = screen.getByTestId('cart-badge');
  expect(divElement).toHaveTextContent(8);
})
