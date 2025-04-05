import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Odyssey</h1>
        <p className="subtitle">Your full stop Travel Assistant</p>
        <input
          className="input"
          type="text"
          placeholder="Where do you want to go?"
        />
      </div>
    </div>
  );
}

export default App;
