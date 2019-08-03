import React , { Component } from 'react'
import Image from '../../../../assets/images/Image3.svg'
import Layout from '../../../../Containers/Layout/Layout'
import styles from './VisitorsForm.module.css'

class VisitorsForm extends Component {
	state = {
		contactinfo: "",
		fullName: "",
		Date: "",
		Time: "",
		Description: "" 
	}
	updateState = (e) => {
		const { name , value } = e.target 
		this.setState({[name]: value})
		console.log(this.state)
	}
	submit = async() => {
		try{

		}
		catch(error){
			
		}
	}
	render (){
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
						<input type="text" className="inputStyle" name="contactinfo" onChange={this.updateState}/>
					</div>
					<div className="formGroup">
						<label htmlFor="">
							Full Name
						</label>
						<input type="text" min="100" className="inputStyle" onChange={this.updateState} name="fullName"/>
					</div>
					<div className="formGroup formGroup-half">
						<label htmlFor="">
							Date
						</label>
						<input type="Date" className="inputStyle" onChange={this.updateState} name="Date"/>
					</div>
					<div className="formGroup formGroup-half last">
						<label htmlFor="">
							Time
						</label>
						<input type="Time" className="inputStyle" onChange={this.updateState} name="Time"/>
					</div>
					<div className="formGroup">
						<label htmlFor="">
							Description
						</label>
						<input type="text" className="inputStyle" onChange={this.updateState} name="Description"/>
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
}

export default VisitorsForm
