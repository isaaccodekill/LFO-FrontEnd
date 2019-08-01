import React from 'react'
import styles from './Logo.module.css'

const Logo = (props) => (<h1 className={styles.Logo} style={{color: props.color}}>The LFO</h1>)

export default Logo