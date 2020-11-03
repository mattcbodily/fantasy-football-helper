import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import './TeamBuilder.css';

const TeamBuilder = props => {
    let [salary, setSalary] = useState(''),
        [targetValue, setTargetValue] = useState(''),
        [actualValue, setActualValue] = useState(''),
        [editView, setEditView] = useState(true);

    useEffect(() => {
        if(salary){
            props.team.map(e => {
                setSalary(salary - e.cost);
            })
        }

        if(targetValue && props.team.length){
            let average = props.team.reduce((acc, curr) => acc + curr.value, 0) / props.team.length;
            setActualValue(average);
        }
    }, [props.team])

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
                        <span>{actualValue}</span>
                        <button onClick={() => setEditView(true)}>Edit</button>
                    </>
                )}
                {props.team.filter(e => e.position === 'QB').map(player => (
                    <div>QB: {player.name}</div>
                ))}
                {props.team.filter(e => e.position === 'RB').map(player => (
                    <div>RB: {player.name}</div>
                ))}
                {props.team.filter(e => e.position === 'WR').map(player => (
                    <div>WR: {player.name}</div>
                ))}
                {props.team.filter(e => e.position === 'TE').map(player => (
                    <div>TE: {player.name}</div>
                ))}
                {props.team.filter(e => e.position === 'FLEX').map(player => (
                    <div>FLEX: {player.name}</div>
                ))}
                {props.team.filter(e => e.position === 'DEF').map(player => (
                    <div>DEF: {player.name}</div>
                ))}
            </section>
        </section>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(TeamBuilder);