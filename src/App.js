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


      <div className="social-icons">
  <a href="https://www.instagram.com/thecrownlessx/" target="_blank" rel="noopener noreferrer">
    <img src={require('./assets/instagram.png')} alt="Instagram" />
  </a>
  <a href="https://www.youtube.com/@thecrownlessX" target="_blank" rel="noopener noreferrer">
    <img src={require('./assets/youtube.png')} alt="YouTube" />
  </a>
  <a href="https://x.com/thecrownlessX" target="_blank" rel="noopener noreferrer">
    <img src={require('./assets/twitter.png')} alt="Twitter" />
  </a>
  <a href="https://www.linkedin.com/company/the-crownless/" target="_blank" rel="noopener noreferrer">
    <img src={require('./assets/linkedin.png')} alt="LinkedIn" />
  </a>
  <a href="https://t.me/thecrownlessX" target="_blank" rel="noopener noreferrer">
    <img src={require('./assets/telegram.png')} alt="Telegram" />
  </a>
</div>


    </div>
  );
}

export default App;
