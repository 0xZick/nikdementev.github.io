import { combineReducers } from 'redux'

import filter from './filter'
import data, * as fromData from './data'

const reducer = combineReducers({
    data,
    filter
})

export default reducer

export function getFilteredBlocks(state) {
    return fromData.getFilteredBlocks(state.data.blocks, state.filter)
}