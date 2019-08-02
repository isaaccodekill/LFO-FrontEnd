import React from 'react'
import styles from './UnAuthNav.module.css'
import Logo from '../UI/Logo/Logo'
import Button from '../UI/Button/ButtonFull/ButtonFull'
import hamburger from '../../assets/images/hamburger.svg'
import { NavLink } from 'react-router-dom'


const UnAuthNav = (props) => {
	const buttonDiv = props.showButton ? null : <Button>
						Admin Login
					</Button>
	return (
		<nav className={styles.navigation}>
			<Logo color="black"/>
			<ul className={styles.navList}>
			<NavLink to='/#about' activeClassName={styles.active}>
				<li className={styles.navItem}>About Us</li>
			</NavLink>
			<NavLink to='/visit' activeClassName={styles.active}>
				<li className={styles.navItem}>Visit</li>
			</NavLink>
			<NavLink to='/Donate' activeClassName={styles.active}>
				<li className={styles.navItem}>Donate</li>
			</NavLink>
			<NavLink to='/#contact' activeClassName={styles.active}>
				<li className={styles.navItem}>Contact Us</li>
			</NavLink>
			</ul>
			<NavLink to='/login'>
				<span className={styles.Login}>
					{buttonDiv}
				</span>
			</NavLink>
			<img className={styles.OpenImg} src={hamburger} alt="The menu bar button" onClick={props.openSideBar}/>
		</nav>
	)
}

export default UnAuthNav