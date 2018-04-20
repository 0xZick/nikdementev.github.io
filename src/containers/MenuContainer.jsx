import { connect } from 'react-redux'

import Menu from '../component/Menu/Menu'

function mapStateToProps(state) {
    return {
        link: state.data.link
    }
}

const MenuContainer = connect(mapStateToProps, null)(Menu)

export default MenuContainer

