import React from 'react'
import { Link } from 'react-router-dom'

import styles from './MenuList.css'
import CSSModules from 'react-css-modules'


function MenuList({ items }) {
  return (
    <nav styleName="task">
      <ul styleName="ul">
      {
        items.map((item, index) => (
          <li styleName="list"  key={index}>
            <Link to={item.link}>
              <svg styleName="icon info" >{item.img}</svg>
              <div styleName="text">{item.label}</div>
            </Link>
          </li>
        ))
      }
      </ul>
    </nav>
  );
}

export default CSSModules(MenuList, styles, { allowMultiple: true })

