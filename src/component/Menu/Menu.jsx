import React from 'react';
import styles from './Menu.css';

import MenuHeader from './Menu-Header/MenuHeader.jsx'
import MenuList from './Menu-List/MenuList.jsx'
import MenuFooter from './Menu-Footer/MenuFooter.jsx'

function Menu(props){
    return (
      <aside className={styles.menu}>
        <MenuHeader />
        <MenuList  items={props.link} />
        <MenuFooter />
      </aside>
    );

}

export default Menu;
