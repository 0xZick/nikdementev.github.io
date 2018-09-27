import React from 'react'

import styles from './About.css'
import CSSModules from 'react-css-modules'

import Header from '../Header/Header'
import Main from './Main/Main.jsx'
import More from './More/More.jsx'


function About() {
  return (
    <article styleName="about">
      <Header title="About me" discription="A few details about myself"/>
      <div styleName="blocks">
        <Main />
        <div styleName="col">
          <More title="My objectives" item={['Lightning network', 'EOS Smart Contract']} />
          <More title="My project" item={['testnet.exchange', 'morejust.media', 'cbwallet.io']}  />
        </div>
      </div>
    </article>
  );
}

export default CSSModules(About, styles)
