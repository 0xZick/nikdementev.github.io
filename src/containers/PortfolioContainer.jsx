import { connect } from 'react-redux'

import Portfolio from '../component/Portfolio/Portfolio'
import { getFilteredBlocks } from '../reduser'
import { setFilter } from '../actions'

function mapStateToProps(state) {
    return {
        blocks: getFilteredBlocks(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setFilter: filter  => dispatch(setFilter(filter))
    }
}

const PortfolioContainer = connect(mapStateToProps, mapDispatchToProps)(Portfolio)

export default PortfolioContainer

