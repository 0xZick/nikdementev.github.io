import React from 'react'

import styles from './Contact.css'
import CSSModules from 'react-css-modules'

import Header from '../Header/Header'

const links = [
  {link: 'tel:+89149746301', text: '(914) 974-63-01', title: 'Phone: '},
  {link: 'mailto:nikita.pietrov.71@mail.ru', text: 'nikita.pietrov.71', title: 'Mail: '},
  {link: 'https://www.google.ru/maps/place/Moscow', text: 'г.Moscow, Russia', title: 'Location: '},
]

function Skill() {
  return (
    <article styleName="about">
      <Header title="Contacts" discription="My personal information"/>
      <div styleName="blocks">
        {
          links.map(link =>
            <div styleName="text"> {link.title}
              <a href={link.link} target="_blank" rel="noreferrer noopener">{link.text}</a>
            </div>
          )
        }
      </div>
    </article>
  )
}

export default CSSModules(Skill, styles)
