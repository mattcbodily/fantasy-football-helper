import React, {useState} from 'react';
import './Player.css';

const Player = props => {
    let [cost, setCost] = useState(''),
        [projPts, setProjPts] = useState(''),
        [teamOvrUnd, setTeamOvrUnd] = useState(''),
        [playerValue, setPlayerValue] = useState('');

    const calculateValue = () => {
        let value = +projPts / (+cost / 1000);

        if(+teamOvrUnd <= 10){
            value -= .5;
        } else if(+teamOvrUnd >= 20 && +teamOvrUnd < 30){
            value += .5;
        } else if(+teamOvrUnd > 30){
            value += .75;
        }

        setPlayerValue(value);
    }

    return (
        <section className='player'>
            <p className='player-name'>{props.player.name}</p>
            <p className='player-team'>{props.player.team}</p>
            {playerValue
            ? <p>{playerValue}</p>
            : (
                <>
                    <input value={cost} placeholder='Cost' onChange={e => setCost(e.target.value)}/>
                    <input value={projPts} placeholder='Projected Points' onChange={e => setProjPts(e.target.value)}/>
                    <input value={teamOvrUnd} placeholder='Team Over/Under' onChange={e => setTeamOvrUnd(e.target.value)}/>
                    <button onClick={calculateValue}>Submit</button>
                </>
            )}
        </section>
    )
}

export default Player;