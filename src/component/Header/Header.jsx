import React from 'react';

import styles from './Header.css'

export default function Header(props)  {
    return (
      <header className={styles.header}>
        <div className={styles.row}>
          <h2 className={styles.h1}>{props.title}</h2>
          { props.select ?           
          <select 
              tabIndex="0" 
              className={styles.filter} 
              onChange={ event => props.onFilter(event.target.value) }
            >
            <option value="NEW" >Новые</option>
            <option value="ALL" >Популярные</option>
          </select>
        :
            ''
        }
        </div>
        <p className={styles.discription}> {props.discription} </p>
      </header>
    );
  }
