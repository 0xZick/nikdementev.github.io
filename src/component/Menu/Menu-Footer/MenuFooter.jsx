import React from 'react'

import styles from './MenuFooter.css'
import CSSModules from 'react-css-modules'


function MenuFooter(){
  return (
    <footer styleName="footer">
      <div styleName="line" />
      <div styleName="text"> Need help ? </div>
      <div styleName="link"> Visit FAQ </div>
    </footer>
  );
}

export default CSSModules(MenuFooter, styles)
