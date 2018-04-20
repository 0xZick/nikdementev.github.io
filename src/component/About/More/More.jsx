import React from 'react';
import styles from './More.css'

export default function More(props){

  return (
    <div className={styles.text}>
      { props.title }
      <div className={ styles.disc }>
        <div className={styles.item}> { props.item } </div>
      </div>
    </div>
  );
}
