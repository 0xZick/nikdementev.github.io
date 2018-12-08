import React from 'react'
import styles from './Block.css'

function Block({ url, alt, name, description, text, link, id }){
  return (
    <div className={styles.block}>
      <div className={styles.main}>
        { id % 2 === 0 && <div className={styles.buttonNew}>Новинка</div> }
        <a href={link} target="_blank" rel="contacts" >
          <img className={styles.logo} src={url} alt={alt}/>
        </a>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
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
