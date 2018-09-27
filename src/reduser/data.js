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
            return state.concat().sort((a, b) => b.id - a.id)

        case 'NEW':
            return state.concat().sort((a, b) => a.id - b.id)

        default:
            return state;
    }
}
