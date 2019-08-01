import React from 'react'
import styles from './ButtonFull.module.css'

const Buttonfull = (props) => {
	return (
		<button className={styles.ButtonFull} onClick={props.active}>
			{props.children}
		</button>
	)
}

export default Buttonfull