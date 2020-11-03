import React, {useState} from 'react';
import {connect} from 'react-redux';
import './TeamBuilder.css';

const TeamBuilder = props => {
    let [salary, setSalary] = useState(''),
        [targetValue, setTargetValue] = useState(''),
        [editView, setEditView] = useState(true);

    console.log(props);

    return (
        <section className='team-builder'>
            <section>
                {editView
                ? (
                    <>
                        <input value={salary} placeholder='Salary' onChange={e => setSalary(e.target.value)}/>
                        <input value={targetValue} placeholder='Target Value' onChange={e => setTargetValue(e.target.value)}/>
                        <button onClick={() => setEditView(false)}>Submit</button>
                    </>
                )
                : (
                    <>
                        <span>${salary}</span>
                        <span>{targetValue}</span>
                        <button onClick={() => setEditView(true)}>Edit</button>
                    </>
                )}
                <div>QB: {props.team.find(e => e.position === 'QB')?.name || 'Select a QB'}</div>
                <div>RB: </div>
                <div>RB: </div>
                <div>WR: </div>
                <div>WR: </div>
                <div>WR: </div>
                <div>TE: {props.team.find(e => e.position === 'TE')?.name || 'Select a TE'}</div>
                <div>FLEX: </div>
                <div>DEF: {props.team.find(e => e.position === 'DEF')?.name || 'Select a DEF'}</div>
            </section>
        </section>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(TeamBuilder);