import React, {useState} from 'react';
import ValueModal from '../ValueModal/ValueModal';
import './Player.css';

const Player = props => {
    let [playerValue, setPlayerValue] = useState(''),
        [modalView, setModalView] = useState(false);

    return (
        <section className='player'>
            <p className='player-name'>{props.player.name}</p>
            <p className='player-team'>{props.player.team}</p>
            {playerValue
                ? <p>{playerValue}</p>
                : <button onClick={() => setModalView(true)}>Get Value</button>}
            {modalView
                ? <ValueModal valueFn={setPlayerValue} modalFn={setModalView}/>
                : null}
        </section>
    )
}

export default Player;