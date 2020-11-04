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
                    <div className='player'>
                        <span>QB: {player.name}</span>
                        <span className='player-team'>{player.team}</span>
                        <span>Cost: ${player.cost}</span>
                        <span>Value: {player.value}</span>
                    </div>
                ))}
                {props.team.filter(e => e.position === 'RB').map(player => (
                    <div className='player'>
                        <span>RB: {player.name}</span>
                        <span>{player.team}</span>
                        <span>{player.cost}</span>
                        <span>{player.value}</span>
                    </div>
                ))}
                {props.team.filter(e => e.position === 'WR').map(player => (
                    <div className='player'>
                        <span>WR: {player.name}</span>
                        <span>{player.team}</span>
                        <span>{player.cost}</span>
                        <span>{player.value}</span>
                    </div>
                ))}
                {props.team.filter(e => e.position === 'TE').map(player => (
                    <div className='player'>
                        <span>TE: {player.name}</span>
                        <span>{player.team}</span>
                        <span>{player.cost}</span>
                        <span>{player.value}</span>
                    </div>
                ))}
                {props.team.filter(e => e.position === 'FLEX').map(player => (
                    <div className='player'>
                        <span>FLEX: {player.name}</span>
                        <span>{player.team}</span>
                        <span>{player.cost}</span>
                        <span>{player.value}</span>
                    </div>
                ))}
                {props.team.filter(e => e.position === 'DEF').map(player => (
                    <div className='player'>
                        <span>DEF: {player.name}</span>
                        <span>{player.team}</span>
                        <span>{player.cost}</span>
                        <span>{player.value}</span>
                    </div>
                ))}
            </section>
        </section>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(TeamBuilder);