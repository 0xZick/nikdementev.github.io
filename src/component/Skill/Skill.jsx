import React from 'react';
import styles from './Skill.css';

import Header from '../Header/Header';
import Main from './Main/Main.jsx';
import More from './More/More.jsx';


export default function Skill(){
  return (
    <article className={styles.about}>
      <Header title="Навыки" discription="Используемые технологии"/>
      <div className={styles.blocks}>
        <Main score={4} star={[1,2,3,4]} alt="CSS оценка 4 из 5" url="/static/media/css.svg"/>
        <Main score={4} star={[1,2,3,4]} alt="HTML оценка 4 из 5" url="/static/media/html.svg"/>
        <Main score={3} star={[1,2,3]} alt="JS оценка 3 из 5" url="/static/media/js.png"/>
      </div>
      <More />
      
    </article>
  );
}
