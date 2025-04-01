// src/App.js
import React from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tervetuloa kauppalistaan!</h1>
      </header>
      <main>
        <ShoppingList />
      </main>
    </div>
  );
}

export default App;
