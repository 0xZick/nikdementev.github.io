import React from 'react';
import styles from './Contact.css';

import Header from '../Header/Header';

export default function Skill(){
  return (
    <article className={styles.about}>
      <Header title="Конакты" discription="Моя контактная информация"/>
      <div className={styles.blocks}>
        <div className={styles.text}> Телефон: <a href="tel:+89149746301">(914) 974-63-01</a></div>
        <div className={styles.text}> Почта: <a href="mailto:nikita.pietrov.71@mail.ru">nikita.pietrov.71</a></div>
        <div className={styles.text}> Расположение: <a href="https://www.google.ru/maps/place/Vladivostok" target="_blank" rel="noopener noreferrer">г.Владивосток, Россия</a></div>
      </div>
    </article>
  );
}
