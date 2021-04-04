import React from 'react';
import toggleTheme from '../functions/toggleTheme';

export default function Header() {
  return (
    <header className="bg-gray-400">
      <h1>Blog</h1>
      <button className="bg-white" onClick={() => toggleTheme()}>
        Toggle theme
      </button>
    </header>
  );
}
