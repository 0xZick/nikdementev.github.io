import React from 'react';

import styles from './More.css'
import CSSModules from 'react-css-modules'


function More({ item, title }){

  return (
    <div styleName="text">
      {title}
      <div styleName="disc">
        {
          item.map(text =>
            <div styleName="item">{text}</div>)
        }
      </div>
    </div>
  );
}

export default CSSModules(More, styles)
