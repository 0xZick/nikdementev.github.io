import React from 'react';

import styles from './Header.css'
import CSSModules from 'react-css-modules'


function Header({ title, select, onFilter, discription })  {
    return (
      <header styleName="header">
        <div styleName="row">
          <h2 styleName="h1">{title}</h2>
          { select && (
            <select
              tabIndex="0"
              styleName="filter"
              onChange={ event => onFilter(event.target.value) }
            >
              <option value="NEW" >New</option>
              <option value="ALL" >Popular</option>
            </select>
          )}
        </div>
        <p styleName="discription"> {discription} </p>
      </header>
    );
  }

export default CSSModules(Header, styles)
