import React from 'react';
import styles from './Portfolio.css'

import Block from './Block/Block.jsx'
import Header from '../Header/Header';

function Portfolio(props){
    return (
		<article className={styles.portfolio} >
		<Header 
			onFilter={ props.setFilter } 
			title="Портфолио" 
			discription="Мои последние проекты"
			select={true}
		/>
			<div className={styles.blocks}>
			{ props.blocks.map((item, index) => 
				<Block
					key={ item.id }
					name={ item.name }
					url={ item.url }
					alt={ item.alt }
					discription={ item.discription }
					text={ item.text }
					link={item.link}
				/>)}
			</div>
		</article>
    );
}

export default Portfolio

