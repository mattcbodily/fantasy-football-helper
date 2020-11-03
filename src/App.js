import React from 'react';
import PlayerList from './Components/PlayerList/PlayerList';
import TeamBuilder from './Components/TeamBuilder/TeamBuilder';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Build Your Team</h1>
      </header>
      <section className='main-flex'>
        <PlayerList />
        <TeamBuilder />
      </section>
    </div>
  );
}

export default App;
