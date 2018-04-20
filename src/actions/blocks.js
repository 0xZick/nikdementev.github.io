export const GET_BLOCKS = 'GET_BLOCKS'

export function getBlocks(data) {
    return dispatch => {
        dispatch({
            type: GET_BLOCKS,
            data
        })
    }
}

