// src/components/ShoppingItem.test.js
import { render, screen } from '@testing-library/react';
import ShoppingItem from './ShoppingItem';

test('näyttää tuotteen nimen', () => {
  render(<ShoppingItem item="Maito" />);
  const itemElement = screen.getByText(/maito/i);
  expect(itemElement).toBeInTheDocument();
});
