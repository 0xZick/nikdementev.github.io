import React from 'react';
import styles from './MenuFooter.css'

export default function MenuFooter(){
  return (
    <footer className={styles.footer}>
      <div className={styles.line} />
      <div className={styles.text}> Нужна помощь ? </div>
      <div className={styles.link}> Visit FAQ </div>
    </footer>
  );
}
