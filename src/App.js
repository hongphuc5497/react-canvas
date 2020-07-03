import React from 'react';
import useScript from './hooks/useScript';
import './App.css';

function App() {
  useScript('./utils/index.js');

  return (
    <div className="App">
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default App;
