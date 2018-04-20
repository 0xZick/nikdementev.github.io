import { GET_BLOCKS } from '../actions'

export default function reducer(state = [], action) {
    switch(action.type) {
        case GET_BLOCKS:
            return action.data

        default:
            return state
    }
}

export function getFilteredBlocks(state, filter) {
    switch (filter) {
        case 'ALL':
            return state;
        
        case 'NEW':
            return state.concat().reverse();

        default:
            return state;
    }
}