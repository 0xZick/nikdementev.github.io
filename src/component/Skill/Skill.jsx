import React from 'react'

import styles from './Skill.css'
import CSSModules from 'react-css-modules'

import Header from '../Header/Header'
import Main from './Main/Main.jsx'
import More from './More/More.jsx'

import react from './images/react.svg'
import redux from './images/redux.svg'
import js from './images/js.png'

const data = [
  { score: 5, star: [1,2,3,4,5], alt: 'React оценка 5 из 5', src: react },
  { score: 5, star: [1,2,3,4,5], alt: 'Redux оценка 5 из 5', src: redux },
  { score: 5, star: [1,2,3,4,5], alt: 'JS оценка 5 из 5', src: js },
]


function Skill(){
  return (
    <article styleName="about">
      <Header title="Skill" discription="My Skill"/>
      <div styleName="blocks">
        {
          data.map(item =>
            <Main
              score={item.score}
              star={item.star}
              alt={item.alt}
              src={item.src}
            />
          )
        }
      </div>
      <More />
    </article>
  );
}

export default CSSModules(Skill, styles)
