import React from 'react'

import styles from './MenuHeader.css'
import CSSModules from 'react-css-modules'

import vk from './images/vk.svg'
import github from './images/github.svg'
import behance from './images/behance.svg'

const nav = [
  {link: 'https://vk.com/puffingcheeks', image: vk, alt: 'Vkontakte'},
  {link: 'https://www.behance.net/nikiStyle', image: github, alt: 'Behance: '},
  {link: 'https://github.com/nikdementev', image: behance, alt: 'Github'},
]


function MenuHeader() {
  return (
    <header styleName="header">
      <div styleName="img" />
      <div styleName="name">Nikita Dementev</div>
      <div styleName="smm">
        {
          nav.map(n =>
            <a href={n.link} target="_blank" rel="noreferrer noopener">
              <img styleName="icon" src={n.image} alt={n.alt} rel="details"/>
            </a>
          )
        }
      </div>
    </header>
  );
}

export default CSSModules(MenuHeader, styles)
