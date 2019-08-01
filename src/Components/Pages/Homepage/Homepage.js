import React from 'react'
import styles from './Homepage.module.css'
import heartImage from '../../../assets/images/Vector.svg'
import ButtonFull from '../../UI/Button/ButtonFull'
import ButtonOutline from '../../UI/Button/ButtonFull'
import Card from '../../UI/Card/Card'
import image1 from '../../../assets/images/image1.svg'
import image2 from '../../../assets/images/Image2.svg'
import image3 from '../../../assets/images/Image3.svg'


const Homepage = () => {
	return (

			<div className={styles.Homepage}>
					<section className={styles.header}>
					<div className={styles.headerContainer}>				
					<h1>Living foundation <span className={styles.colred}>Orphange</span></h1>
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
						<h1 className={styles.sectionHeading}>
							About Us
						</h1>
						<p className={styles.sectionText}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
							Asperiores voluptas sed pariatur at perspiciatis vel repellat maiores corporis reiciendis eveniet dolorum placeat hic,
							esse minus recusandae magni consequuntur dolor provident officiis aut repudiandae. 
							Eius ea iste reiciendis aperiam, ipsam modi natus quis quibusdam, maiores provident.
						</p>
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
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi praesentium voluptate ab aspernatur dignissimos consequatur iste corrupti quis, eos inventore? Quasi voluptatibus tenetur ab. Perferendis possimus praesentium molestiae incidunt vel!	
						</Card>	
						</div>
					</section>
					<section className={styles.contact}>
						<div className={styles.contactBox}>

						</div>
						<img src={image3} alt="" className="img img-3"/>
					</section>
					<p className={styles.LocationText}>
					LFo is located at
					<span className={styles.darkify}>

					</span>
					</p>
					<footer>
					<div className={styles.socialmMedia}>
					<a href="" className={styles.socialmMediaLinks}>
					<img src="" alt=""/>
					</a>
					<a href="" className={styles.socialmMediaLinks}>
					<img src="" alt=""/>
					</a>
					<a href="" className={styles.socialmMediaLinks}>
					<img src="" alt=""/>
					</a>
					<a href="" className={styles.socialmMediaLinks}>
					<img src="" alt=""/>
					</a>
					<a href="" className={styles.socialmMediaLinks}>
					<img src="" alt=""/>
					</a>
					<a href="" className={styles.socialmMediaLinks}>
					<img src="" alt=""/>
					</a>
					</div>
					<p className={styles.copyrightText}>
					&copy; Coutersy of team 6 OHW
					</p>
					</footer>

			</div>
			
	)
}
export default Homepage