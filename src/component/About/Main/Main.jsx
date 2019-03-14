import React from 'react'

import styles from './Main.css'
import CSSModules from 'react-css-modules'


function Main(){
  return (
    <div styleName="text">
      My name Nikita, 21 years, ending VVSU
      at the Faculty Applied Informatics,
      Information Department technologies and systems,
      i live, in Moscow. Have been working for 4 years,
      now working as a Lead Frontend Developer in insentry.io,
      also study common of patterns
      programming and learning HTML, CSS.
    </div>
  );
}

export default CSSModules(Main, styles)
