import React , { Component } from 'react'
import TeddyImage from '../../../../assets/images/image1.svg'
import Layout from '../../../../Containers/Layout/Layout'
import styles from './Donation.module.css'

class Donation extends Component {
	state = {
		fullName: "",
		account: "",
		description: ""
	}
	updateState = (e) => {
		const { name , value }  = e.target
		this.setState({[name]: value})
	}
	submit = () => {
		try {

		}
		catch (error){

		}
	}

	render (){
		return(
		<Layout>
			<div className={styles.Donation}>
			<div className={styles.DonationFormBox}>
				<h2 className="formHeading">
					Make a donation
				</h2>
				<p className="formSubHeading">Contribute to cater for a child</p>
				<form className="formStlye">
					<div className="formGroup">
						<label htmlFor="">
							Full name
						</label>
						<input type="text" className="inputStyle" onChange={this.updateState} name="fullName" value={this.state.fullName}/>
					</div>
					<div className="formGroup">
						<label htmlFor="">
							Amount
						</label>
						<input type="number" min="100" className="inputStyle" onChange={this.updateState} name="amount" value={this.state.amount}/>
					</div>
					<div className="formGroup">
						<label htmlFor="">
							Description
						</label>
						<input type="text" className="inputStyle" onChange={this.updateState} name="description" value={this.state.description}/>
					</div>
					<button className="form-submit">
						Donate
					</button>
					<p className={styles.supportText}>Supported By interswitch</p>
				</form>
			</div>
			<img src={TeddyImage} className={styles.img} alt=""/>

		   </div>
		</Layout>
	)	
	}
	
}

export default Donation
