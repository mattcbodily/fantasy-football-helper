import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import './TeamBuilder.css';

const TeamBuilder = props => {
    let [salary, setSalary] = useState(50000),
        [targetValue, setTargetValue] = useState(2.5),
        [actualValue, setActualValue] = useState(0);

    useEffect(() => {
        if(salary){
            props.team.map(e => {
                setSalary(salary - e.cost);
            })
        }

        if(targetValue && props.team.length){
            let average = props.team.reduce((acc, curr) => acc + curr.value, 0) / props.team.length;
            setActualValue(average.toFixed(2));
        }
    }, [props.team])

    return (
        <section className='team-builder'>
            <section>
                <span className='salary'>Salary: ${salary}</span>
                <span className='target-value'>Target Value: {targetValue}</span>
                <span className='actual-value'>Actual Value: {actualValue}</span>
                {props.team.filter(e => e.position === 'QB').map(player => (
                    <div className='player'>QB: {player.name}</div>
                ))}
                {props.team.filter(e => e.position === 'RB').map(player => (
                    <div className='player'>RB: {player.name}</div>
                ))}
                {props.team.filter(e => e.position === 'WR').map(player => (
                    <div className='player'>WR: {player.name}</div>
                ))}
                {props.team.filter(e => e.position === 'TE').map(player => (
                    <div className='player'>TE: {player.name}</div>
                ))}
                {props.team.filter(e => e.position === 'FLEX').map(player => (
                    <div className='player'>FLEX: {player.name}</div>
                ))}
                {props.team.filter(e => e.position === 'DEF').map(player => (
                    <div className='player'>DEF: {player.name}</div>
                ))}
            </section>
        </section>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(TeamBuilder);