import React from 'react';
import styles from './Main.css'

export default function Main(props){
  return (
    <div className={styles.blocks}>
          <div className={styles.block}>
            <div className={styles.score}> { props.score }</div>
            { props.star.map((item, index) => {
              return(
                <svg className={styles.icon} key={ index }>
                  <use href="#my-star-icon" />
                </svg>
              );
            })}
            <img className={styles.img} src={props.url} alt={ props.alt }/>
          </div>
    </div>
  );
}
