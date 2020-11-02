import React, {useState} from 'react';
import Player from '../Player/Player';
import players from '../../players.json';
import './PlayerList.css';

export default () => {
    let [position, setPosition] = useState('QB');

    return (
        <section className='playerlist'>
            <nav className='position-navigation'>
                <div onClick={() => setPosition('QB')}>QB</div>
                <div onClick={() => setPosition('RB')}>RB</div>
                <div onClick={() => setPosition('WR')}>WR</div>
                <div onClick={() => setPosition('TE')}>TE</div>
                <div onClick={() => setPosition('DEF')}>DEF</div>
            </nav>
            <section className='player-display'>
                {players.filter(e => e.position === position).map(player => (
                    <Player key={player.name} player={player}/>
                ))}
            </section>
        </section>
    )
}