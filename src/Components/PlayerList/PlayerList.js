import React, {useState} from 'react';
import players from '../../players.json';

export default () => {
    let [position, setPosition] = useState('QB');

    return (
        <section>
            <section>
                {players.filter(e => e.position === position).map((player, i) => (
                    <p key={i}>{player.name}</p>
                ))}
            </section>
        </section>
    )
}