import React from 'react'

import styles from './Menu.css'
import CSSModules from 'react-css-modules'

import MenuHeader from './Menu-Header/MenuHeader.jsx'
import MenuList from './Menu-List/MenuList.jsx'
import MenuFooter from './Menu-Footer/MenuFooter.jsx'

function Menu({ link }){
    return (
      <aside styleName="menu">
        <MenuHeader />
        <MenuList  items={link} />
        <MenuFooter />
      </aside>
    );

}

export default CSSModules(Menu, styles)
