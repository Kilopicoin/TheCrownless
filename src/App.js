import React from 'react';
import './App.css';
import logo from './assets/thecrownless_logo.png';

function App() {
  return (
    <div className="app-container">
      <img src={logo} alt="The Crownless Logo" className="logo" />

      <p className="description">
        <strong>The Crownless</strong> is a next-generation Medieval MMORPG bringing together
        classic old-school game excitement and modern interfaces. Dive into
        rich lore, skill-based combat, and a vibrant player-driven world.
      </p>

      <p className="status">⚔️ Pre-Sale will start on the 1st of September 2025</p>

    </div>
  );
}

export default App;
