const initialState = {
    team: []
}

const ADD_PLAYER = 'ADD_PLAYER',
      REMOVE_PLAYER = 'REMOVE_PLAYER';

export function addPlayer(playerObj){
    return {
        type: ADD_PLAYER,
        payload: playerObj
    }
}

export function removePlayer(name){
    return {
        type: REMOVE_PLAYER,
        payload: name
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case ADD_PLAYER:
            const teamCopy = state.team.slice();
            teamCopy.push(payload);

            return {...state, team: teamCopy};
        case REMOVE_PLAYER:
            const teamCopyTwo = state.team.slice(),
                  index = teamCopyTwo.findIndex(e => e.name === payload);

            teamCopyTwo.splice(index);
            return {...state, team: teamCopyTwo};
        default:
            return state;
    }
}