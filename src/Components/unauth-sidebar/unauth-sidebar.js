import React from 'react'
import Logo from '../UI/Logo/Logo'
import styles from "./unauth-sidebar.module.css"
import BackImage from '../../assets/images/close.svg'

const unAuthSide = (props) => {

	const addedClass = props.show ? styles.showSide : styles.hideSide  		

	return (
		<div className={[styles.sideBar, addedClass].join(' ')}>
			<div className={styles.top}>
				<img onClick={props.closeAction} src={BackImage} alt="Back Image" className={styles.img} on/>
				<Logo />
			</div>
			<ul className={styles.navList}>
				<li className={styles.navItem}>About</li>
				<li className={styles.navItem}>Contact Us</li>
				<li className={styles.navItem}>Donate</li>
				<li className={styles.navItem}>Visit</li>
				<li className={styles.navItem}>Admin Login</li>		
			</ul>
			<div className="soc-section">
				<a href="" className="socialLinks">
					<img src="" alt=""/>
				</a>
				<a href="" className="socialLinks">
					<img src="" alt=""/>
				</a>
				<a href="" className="socialLinks">
					<img src="" alt=""/>
				</a>
				<a href="" className="socialLinks">
					<img src="" alt=""/>
				</a>
			</div>
		</div>
	)
}

export default unAuthSide