import { Link } from '@reach/router';
import React from 'react';
import toggleTheme from '../functions/toggleTheme';

export default function Header() {
  return (
    <header className="bg-primary">
      <nav>
        <Link to="/">
          <h1>Harsh Rohila</h1>
          <p>A public diary</p>
        </Link>
        <Link to="/blog">
          <h3>Blog</h3>
        </Link>
      </nav>
      <button className="bg-white" onClick={() => toggleTheme()}>
        Toggle theme
      </button>
    </header>
  );
}
