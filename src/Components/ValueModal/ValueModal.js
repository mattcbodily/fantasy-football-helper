import React, {useState} from 'react';
import './ValueModal.css';

const ValueModal = props => {
    let [cost, setCost] = useState(''),
        [projPts, setProjPts] = useState(''),
        [teamOvrUnd, setTeamOvrUnd] = useState('');

        const calculateValue = (e) => {
            e.preventDefault();
            let value = +projPts / (+cost / 1000);
    
            if(+teamOvrUnd <= 10){
                value -= .5;
            } else if(+teamOvrUnd >= 20 && +teamOvrUnd < 30){
                value += .25;
            } else if(+teamOvrUnd >= 30){
                value += .5;
            }
    
            value = value.toFixed(2);
            props.valueFn(value);
            props.modalFn(false);
        }

    return (
        <section className='modal-backdrop'>
            <form className='value-modal'>
                <input value={cost} placeholder='Cost' onChange={e => setCost(e.target.value)}/>                <input value={projPts} placeholder='Projected Points' onChange={e => setProjPts(e.target.value)}/>
                <input value={teamOvrUnd} placeholder='Team Over/Under' onChange={e => setTeamOvrUnd(e.target.value)}/>
                <button onClick={calculateValue}>Submit</button>
            </form>
        </section>
    )
}

export default ValueModal;