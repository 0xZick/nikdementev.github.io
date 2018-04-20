import { SET_FILTER } from '../actions'

function reducer(state = 'NEW', action) {
    switch(action.type) {
        case SET_FILTER:
            return action.filter

        default:
            return state
    }
}

export default reducer