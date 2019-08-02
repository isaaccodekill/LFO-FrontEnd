import React from 'react'
import Image from '../../../../assets/images/Image3.svg'
import Layout from '../../../../Containers/Layout/Layout'
import styles from './VisitorsForm.module.css'

const VisitorsForm = (props) => {
	return(
		<Layout>
			<div className={styles.VisitorsForm}>
			<div className={styles.VisitorsFormFormBox}>
				<h2 className="formHeading">
					Visit us
				</h2>
				<p className="formSubHeading">Contribute to cater for a child</p>
				<form className="formStlye">
					<div className="formGroup">
						<label htmlFor="">
							Email or phone
						</label>
						<input type="text" className="inputStyle"/>
					</div>
					<div className="formGroup">
						<label htmlFor="">
							Full Name
						</label>
						<input type="text" min="100" className="inputStyle"/>
					</div>
					<div className="formGroup formGroup-half">
						<label htmlFor="">
							Date
						</label>
						<input type="Date" className="inputStyle"/>
					</div>
					<div className="formGroup formGroup-half">
						<label htmlFor="">
							Time
						</label>
						<input type="Time" className="inputStyle"/>
					</div>
					<div className="formGroup">
						<label htmlFor="">
							Description
						</label>
						<input type="text" className="inputStyle"/>
					</div>
					<button className="form-submit">
						Send
					</button>
				</form>
			</div>
			<img src={Image} className={styles.img} alt=""/>

		   </div>
		</Layout>
	)
}

export default VisitorsForm
