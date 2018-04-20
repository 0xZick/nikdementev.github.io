import React from 'react';
import styles from './MenuHeader.css'

function MenuHeader(){
  return (
    <header className={styles.header}>
      <div className={styles.img} />
      <div className={styles.name}>Никита Дементьев</div>
      <div className={styles.smm}>
        <a href="https://vk.com/puffingcheeks" target="_blank">
          <img className={styles.icon} src="/static/media/vk.svg" alt="Vkontakte" rel="details"/>
        </a>
        <a href="https://www.behance.net/nikiStyle" target="_blank">
          <img className={styles.icon} src="/static/media/behance.svg" alt="Behance" rel="details"/>
        </a>
        <a href="https://github.com/puffingCheeks" target="_blank">
          <img className={styles.icon} src="/static/media/github-logo.svg" alt="Github" rel="details"/>
        </a>
      </div>
    </header>
  );
}

export default MenuHeader;
