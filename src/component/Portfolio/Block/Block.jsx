import React from 'react';
import styles from './Block.css'

function Block(props){
  return (
    <div className={styles.block}>
      <div className={styles.main}>
        <div className={styles.buttonNew}>Новинка</div>
        <img className={styles.logo} src={ props.url } alt={ props.alt }/>
        <div className={styles.name}>{ props.name }</div>
        <div className={styles.discription}>{ props.discription }</div>
        <div className={styles.line} />
        <div className={styles.text}>{ props.text }</div>
      </div>
      <div className={styles.button}>
        <button className={styles.like}>Нравится</button>
        <div className={styles.lineHorizontal} />
        <a href={ props.link } target="_blank" rel="contacts" className={styles.more}>Подробнее</a>
      </div>
    </div>
  );
}

export default Block;
