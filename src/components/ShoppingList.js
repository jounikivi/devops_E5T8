// src/components/ShoppingList.js
import React, { useState } from 'react';
import ShoppingItem from './ShoppingItem';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const handleAddItem = () => {
    if (input.trim() !== '') {
      setItems([...items, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h2>Kauppalista</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Lisää uusi tuote"
      />
      <button onClick={handleAddItem}>Lisää</button>
      <ul>
        {items.map((item, index) => (
          <ShoppingItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
