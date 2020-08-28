import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game.js';
import {Grommet} from 'grommet';
function App() {
  return (
    <Grommet plain>
    <div className="App">
    <Game/>
    </div>
    </Grommet>
  );
}

export default App;
