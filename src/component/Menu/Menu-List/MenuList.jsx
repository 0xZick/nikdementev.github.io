import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MenuList.css'



function MenuList(props){

  return (
    <nav className={styles.task}>
      <ul className={styles.ul}>
      { props.items.map((item, index) => {
      return(
          <li className={styles.list}  key = { index }>
            <Link to={ item.link }>
              <svg className={ styles.icon + ' ' +  styles.info  } >
                { item.img }
              </svg>
              <div className={ styles.text }>
              { item.label }
              </div>
            </Link>
          </li>
      );
     }) }
      </ul>
    </nav>
  );

}

export default MenuList;

