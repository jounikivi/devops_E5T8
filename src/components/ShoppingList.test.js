// src/components/ShoppingList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingList from './ShoppingList';

test('renderöi otsikon', () => {
  render(<ShoppingList />);
  const heading = screen.getByText(/kauppalista/i);
  expect(heading).toBeInTheDocument();
});

test('lisää tuotteen listaan', () => {
  render(<ShoppingList />);
  const input = screen.getByPlaceholderText(/lisää uusi tuote/i);
  const button = screen.getByText(/lisää/i);

  fireEvent.change(input, { target: { value: 'Juusto' } });
  fireEvent.click(button);

  const newItem = screen.getByText(/juusto/i);
  expect(newItem).toBeInTheDocument();
});
