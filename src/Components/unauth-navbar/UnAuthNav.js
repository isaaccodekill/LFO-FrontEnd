import React from 'react'
import styles from './UnAuthNav.module.css'
import Logo from '../UI/Logo/Logo'
import Button from '../UI/Button/ButtonFull/ButtonFull'
import hamburger from '../../assets/images/hamburger.svg'


const UnAuthNav = (props) => {
	return (
		<nav className={styles.navigation}>
			<Logo color="black"/>
			<ul className={styles.navList}>
				<li className={styles.navItem}>About Us</li>
				<li className={styles.navItem}>Contact Us</li>
				<li className={styles.navItem}>Donate</li>
				<li className={styles.navItem}>Visit</li>
			</ul>
			<div className={styles.Login}>
			<Button>
				Admin Login
			</Button>
			</div>
			<img className={styles.OpenImg} src={hamburger} alt="The menu bar button" onClick={props.openSideBar}/>
		</nav>
	)
}

export default UnAuthNav