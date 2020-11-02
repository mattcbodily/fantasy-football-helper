import React from 'react';
import './Player.css';

export default props => (
    <section className='player'>
        <p>{props.player.name}</p>
        <p>{props.player.team}</p>
    </section>
)