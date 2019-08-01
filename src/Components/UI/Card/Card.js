import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {
	return (
		<div className={styles.card}>
			<img src={props.image} alt=""/>
			<h2 className="heading2" style={{
				color: "#eb772"
			}}>
				{props.heading}
			</h2>
			<p className={styles.cardText}>
				{props.children}
			</p>
		</div>
	)
}

export default Card