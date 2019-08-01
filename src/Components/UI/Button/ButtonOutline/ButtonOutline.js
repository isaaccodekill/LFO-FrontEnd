import React from 'react'
import styles from './ButtonOutline.module.css'

const ButtonOutline = (props) => {
	return (
		<button className={styles.ButtonOutline} onClick={props.active}>
			{props.children}
		</button>
	)
}

export default Buttonfull