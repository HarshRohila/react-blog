import React from 'react';
import toggleTheme from '../functions/toggleTheme';

export default function Header() {
  return (
    <header className="bg-primary">
      <h1>Harsh Rohila</h1>
      <button className="bg-white" onClick={() => toggleTheme()}>
        Toggle theme
      </button>
    </header>
  );
}
