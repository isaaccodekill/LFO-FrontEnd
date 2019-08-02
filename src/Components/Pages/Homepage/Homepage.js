import React from 'react'
import styles from './Homepage.module.css'
import heartImage from '../../../assets/images/Vector.svg'
import ButtonFull from '../../UI/Button/ButtonFull/ButtonFull'
import ButtonOutline from '../../UI/Button/ButtonOutline/ButtonOutline'
import Card from '../../UI/Card/Card'
import image1 from '../../../assets/images/image1.svg'
import image2 from '../../../assets/images/Image2.svg'
import image3 from '../../../assets/images/Image3.svg'
import twitterImage from '../../../assets/images/twitter.svg'
import instagramImage from '../../../assets/images/instagram.svg'
import facebookImage from '../../../assets/images/facebook.svg'
import Layout from "../../../Containers/Layout/Layout"



const Homepage = () => {
	return (
		<Layout>
					<div className={styles.Homepage}>
					<section className={styles.header}>
					<div className={styles.headerContainer}>				
					<h1>Living Foundation <span className={styles.colored}>Orphange</span></h1>
					<p className={styles.headerText}>
					Empowering children to reach their full potential
					</p>
					<ButtonFull>Donate</ButtonFull>
					<ButtonOutline>Visit</ButtonOutline>
					</div>
					<img src={image1} alt="Teddy Bear" className="img img1"/>
					</section>
					<section className={styles.AdditionalInfo}>
						<img src={image2} alt="" className="img2 img"/>
						<div className={styles.headerContainer}>
							<h1 className={[styles.sectionHeading]}>
								About Us
							</h1>
							<p className={styles.sectionText}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
								Asperiores voluptas sed pariatur at perspiciatis vel repellat maiores corporis reiciendis eveniet dolorum placeat hic,
								esse minus recusandae magni consequuntur dolor provident officiis aut repudiandae. 
								Eius ea iste reiciendis aperiam, ipsam modi natus quis quibusdam, maiores provident.
							</p>
						</div>
						</section>
					<section className={styles.goals}>
						<h1 className={styles.sectionHeading}>
							Goals
						</h1>
						<div className={styles.cardList}>
						<Card image={heartImage} heading="Education">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, exercitationem eius quibusdam, accusantium expedita animi deleniti mollitia libero, architecto, nemo ipsam dicta vero dolorum quas.							
						</Card>
						<Card image={heartImage} heading="Adoption">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dolorem, delectus molestias iste ullam. Reiciendis voluptate totam nulla sed perspiciatis.
						</Card>
						<Card image={heartImage} heading="Health And Support">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi praesentium voluptate ab aspernatur dignissimos consequatur iste corrupti quis!					</Card>	
						</div>
					</section>
					<section className={styles.contact}>
						<div className={styles.contactBox}>			
							<h2 className="formHeading">
								Contact Us
							</h2>
				<form className="formStlye">
								<div className="formGroup">
									<label htmlFor="">
										Email Address or Phone Number
									</label>
									<input type="text" className="inputStyle"/>
								</div>
								<div className="formGroup">
									<label htmlFor="">
										Message
									</label>
									<textarea className="textareaStyle"/>
								</div>
								<button className="form-submit">
									Login
								</button>
							</form>
						</div>
						<img src={image3}  alt="" className={styles.imageContact}/>
						<p className={styles.LocationText}>
							LFo is located at <span className={styles.darkify}> insert Location </span>
					</p>
					</section>
					<footer className={styles.footer}>
					<p className={styles.copyRightText}>
					&copy; Coutersy of team 6 OHW
					</p>
					</footer>

			</div>
		</Layout>
			
	)
}
export default Homepage