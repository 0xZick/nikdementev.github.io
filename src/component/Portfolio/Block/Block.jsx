import React from 'react'
import styles from './Block.css'

function Block({ url, alt, name, discription, text, link, id }){
  return (
    <div className={styles.block}>
      <div className={styles.main}>
        { id % 2 === 0 && <div className={styles.buttonNew}>Новинка</div> }
        <img className={styles.logo} src={url} alt={alt}/>
        <div className={styles.name}>{name}</div>
        <div className={styles.discription}>{discription}</div>
        <div className={styles.line} />
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.button}>
        <button className={styles.like}>Нравится</button>
        <div className={styles.lineHorizontal} />
        <a href={link} target="_blank" rel="contacts" className={styles.more}>Подробнее</a>
      </div>
    </div>
  );
}

export default Block;
