import React from 'react';
import PlayerList from './Components/PlayerList/PlayerList';
import TeamBuilder from './Components/TeamBuilder/TeamBuilder';
import './App.css';

function App() {
  return (
    <div className="App">
      <PlayerList />
      <TeamBuilder />
    </div>
  );
}

export default App;
