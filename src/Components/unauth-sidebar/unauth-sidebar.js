import React from 'react'
import Logo from ''
import styles from "./unuth-sidebar.module.css"
import BackImage from '../../assets/images/close.svg'
// import Button from '../UI/Button/Button'
// import twitter from ''
// import instagram from ''
// import facebook from ''

const unAuthSide = (props) => {

	const addedClass = props.show ? styles.showSide : styles.hideSide  		

	return (
		<div className={[styles.sideBar, addedClass].join(' ')}>
			<img src={BackImage} alt="Back Image" className={styles.img} on/>
			<Logo className={styles.logo} color="white"/>
			<ul className="navList">
				<li className="navItem">About</li>
				<li className="navItem">Contact Us</li>
				<li className="navItem">Donate</li>
				<li className="navItem">Visit</li>
				<li className="navItem">Admin Login</li>		
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