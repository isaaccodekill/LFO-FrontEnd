import React from 'react'
import styles from './UnAuthNav.module.css'
import Logo from '../UI/Logo/Logo'
import Button from '../UI/Button/Button'
import hamburger from '../../assets/images/hamburger.svg'


const UnAuthNav = (props) => {
	<nav className={styles.navigation}>
		<Logo color="black"/>
		<ul className={styles.navList}>
			<li className={styles.navItem}>About Us</li>
			<li className={styles.navItem}>Contact Us</li>
			<li className={styles.navItem}>Donate</li>
			<li className={styles.navItem}>Visit</li>
		</ul>
	</nav>
	<Button>
		Admin Login
	</Button>
	<img src={hamburger} alt="The menu bar button" onclick={props.openSideBar}/>
}

export default UnAuthNav