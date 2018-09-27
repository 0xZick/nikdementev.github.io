import React from 'react'

import styles from './Portfolio.css'
import CSSModules from 'react-css-modules'

import Block from './Block/Block.jsx'
import Header from '../Header/Header'



function Portfolio({ setFilter, blocks }){
    return (
		<article styleName="portfolio" >
		<Header
			onFilter={setFilter}
			title="Expirience"
			discription="My last project"
			select
		/>
			<div styleName="blocks">
			{ blocks.map(item =>
				<Block
					key={item.id}
					id={item.id}
					name={item.name}
					url={item.url}
					alt={item.alt}
					discription={item.discription}
					text={item.text}
					link={item.link}
				/>)}
			</div>
		</article>
    );
}

export default CSSModules(Portfolio, styles)

