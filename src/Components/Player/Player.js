import React, {useState} from 'react';
import {connect} from 'react-redux';
import ValueModal from '../ValueModal/ValueModal';
import {addPlayer} from '../../redux/reducer';
import './Player.css';

const Player = props => {
    let [cost, setCost] = useState(''),
        [playerValue, setPlayerValue] = useState(''),
        [modalView, setModalView] = useState(false);

    const addPlayer = () => {
        const {player} = props;

        let newPlayer = {
            name: player.name,
            team: player.team,
            cost: +cost,
            value: +playerValue
        }

        props.addPlayer(newPlayer);
    }

    return (
        <section className='player'>
            <p className='player-name'>{props.player.name}</p>
            <p className='player-team'>{props.player.team}</p>
            {playerValue
                ? (
                    <>
                        <p>{playerValue}</p>
                        <button onClick={addPlayer}>Add to Team</button>
                    </>
                )
                : <button onClick={() => setModalView(true)}>Get Value</button>}
            {modalView
                ? <ValueModal cost={cost} costFn={setCost} valueFn={setPlayerValue} modalFn={setModalView}/>
                : null}
        </section>
    )
}

export default connect(null, {addPlayer})(Player);