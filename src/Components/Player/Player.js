import React, {useState} from 'react';
import './Player.css';

export default props => {
    let [cost, setCost] = useState(''),
        [projPts, setProjPts] = useState(''),
        [teamOvrUnd, setTeamOvrUnd] = useState('');

    return (
        <section className='player'>
            <p className='player-name'>{props.player.name}</p>
            <p className='player-team'>{props.player.team}</p>
            <input value={cost} placeholder='Cost' onChange={e => setCost(e.target.value)}/>
            <input value={projPts} placeholder='Projected Points' onChange={e => setProjPts(e.target.value)}/>
            <input value={teamOvrUnd} placeholder='Team Over/Under' onChange={e => setTeamOvrUnd(e.target.value)}/>
        </section>
    )
}