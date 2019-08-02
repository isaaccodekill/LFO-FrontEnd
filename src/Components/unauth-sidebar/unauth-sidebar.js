import React from 'react'
import Logo from '../UI/Logo/Logo'
import styles from "./unauth-sidebar.module.css"
import BackImage from '../../assets/images/close.svg'
import { NavLink } from 'react-router-dom'
const unAuthSide = (props) => {

	const addedClass = props.show ? styles.showSide : styles.hideSide  		

	return (
		<div className={[styles.sideBar, addedClass].join(' ')}>
			<div className={styles.top}>
				<img onClick={props.closeAction} src={BackImage} alt="Back Image" className={styles.img} on/>
				<Logo />
			</div>
			<ul className={styles.navList}>
				<NavLink to="/#about" activeClassName={styles.active}>
					<li className={styles.navItem}>About</li>
				</NavLink>
				<NavLink to="/#Contact" activeClassName={styles.active}>
					<li className={styles.navItem}>Contact Us</li>					
				</NavLink>
				<NavLink to="/Donate" activeClassName={styles.active}>	
					<li className={styles.navItem}>Donate</li>					
				</NavLink>
				<NavLink to="/visit" activeClassName={styles.active}>
					<li className={styles.navItem}>Visit</li>
				</NavLink>
				<NavLink to="/login" activeClassName={styles.active}>
					<li className={styles.navItem}>Admin Login</li>							
				</NavLink>				
			</ul>
		</div>
	)
}

export default unAuthSide