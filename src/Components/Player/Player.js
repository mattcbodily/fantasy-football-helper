import React from 'react';

export default props => (
    <section>
        <p>{props.player.name}</p>
        <p>{props.player.team}</p>
    </section>
)