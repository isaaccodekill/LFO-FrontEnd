import React from 'react'
import Button from ''
import Card from ''
import image1 from ''
import image2 from ''
import image3 from ''


const Homepage = () => {
	return (

			<div className="">
					<section className="header">
					<div className="">				
					<h1>Living foundation <span className="colored">Orphange</span></h1>
					<p className={headerText}>
					Empowering children to reach their full potential
					</p>
					<ButtonFull>Donate</ButtonFull>
					<ButtonOutline>Visit</ButtonOutline>
					</div>
					<img src="" alt="Teddy Bear" className="img img1"/>
					</section>
					<section className="AdditionalInfo">
						<img src="" alt="" className="img2 img"/>
						<h1 className={sectionHeading}>
							About Us
						</h1>
						<p className="sectionText">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
							Asperiores voluptas sed pariatur at perspiciatis vel repellat maiores corporis reiciendis eveniet dolorum placeat hic,
							esse minus recusandae magni consequuntur dolor provident officiis aut repudiandae. 
							Eius ea iste reiciendis aperiam, ipsam modi natus quis quibusdam, maiores provident.
						</p>
						</section>
					<section className="goals">
						<h1 className={sectionHeading}>
							Goals
						</h1>
						<div className="cardList">
						<Card image={} heading="Education">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, exercitationem eius quibusdam, accusantium expedita animi deleniti mollitia libero, architecto, nemo ipsam dicta vero dolorum quas.							
						</Card>
						<Card image={} heading="Adoption">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dolorem, delectus molestias iste ullam. Reiciendis voluptate totam nulla sed perspiciatis.
						</Card>
						<Card image={} heading="Health And Support">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi praesentium voluptate ab aspernatur dignissimos consequatur iste corrupti quis, eos inventore? Quasi voluptatibus tenetur ab. Perferendis possimus praesentium molestiae incidunt vel!	
						</Card>	
						</div>
					</section>
					<section className="contact">
						<div className="contact-box">

						</div>
						<img src="" alt="" className="img img-3"/>
					</section>
					<p className="LocationText">
					LFo is located at
					<span className={styles.darkify}>

					</span>
					</p>
					<footer>
					<div className="social-media">
					<a href="" className="social-media--links">
					<img src="" alt=""/>
					</a>
					<a href="" className="social-media--links">
					<img src="" alt=""/>
					</a>
					<a href="" className="social-media--links">
					<img src="" alt=""/>
					</a>
					<a href="" className="social-media--links">
					<img src="" alt=""/>
					</a>
					<a href="" className="social-media--links">
					<img src="" alt=""/>
					</a>
					<a href="" className="social-media--links">
					<img src="" alt=""/>
					</a>
					</div>
					<p className="copyright-text">
					&copy; Coutersy of team 6 OHW
					</p>
					</footer>

			</div>
			
	)
}
export default Homepage