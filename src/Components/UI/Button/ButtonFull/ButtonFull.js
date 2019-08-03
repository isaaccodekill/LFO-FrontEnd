import React from 'react'
import styles from './ButtonFull.module.css'

const ButtonFull = (props) => {
	return (
		<button className={styles.ButtonFull} onClick={props.action}>
			{props.children}
		</button>
	)
}

export default ButtonFull