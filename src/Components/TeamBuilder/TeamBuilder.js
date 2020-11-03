import React, {useState} from 'react';
import {connect} from 'react-redux';

const TeamBuilder = props => {
    let [salary, setSalary] = useState(''),
        [targetValue, setTargetValue] = useState('');

    console.log(props);

    return (
        <section>

        </section>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(TeamBuilder);