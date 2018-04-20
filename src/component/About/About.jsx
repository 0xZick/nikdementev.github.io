import React from 'react';
import styles from './About.css';

import Header from '../Header/Header';
import Main from './Main/Main.jsx';
import More from './More/More.jsx';

export default function About(){
  return (
    <article className={styles.about}>
      <Header title="Обо мне" discription="Не много обо мне"/>
      <div className={styles.blocks}>
        <Main />
        <div className={styles.col}>
          <More title="Мои цели" item="Написать статью" />
          <More title="Мои проекты" item="cbwallet.io"  />
        </div>
      </div>
    </article>
  );
}
