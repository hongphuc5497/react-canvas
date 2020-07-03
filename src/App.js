import React, { useEffect } from 'react';
import { init } from './utils';

function App() {
  useEffect(() => {
    if (window) {
      window.addEventListener('load', init)
    }

    return () => {
      window.removeEventListener('load', init);
    }
  }, [])

  return (
    <div className="App">
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default App;
