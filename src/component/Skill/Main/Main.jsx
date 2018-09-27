import React from 'react'

import styles from './Main.css'
import CSSModules from 'react-css-modules'


function Main({ score, star, alt, src }) {
  return (
    <div styleName="blocks">
      <div styleName="block">
        <div styleName="score">{score}</div>
        {
          star.map(item =>
            <svg styleName="icon" >
              <use href="#my-star-icon" />
            </svg>
          )
        }
        <img styleName="img" src={src} alt={alt}/>
      </div>
    </div>
  );
}

export default CSSModules(Main, styles)

