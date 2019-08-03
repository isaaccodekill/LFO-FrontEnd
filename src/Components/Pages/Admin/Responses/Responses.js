import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import Loader from "react-loader-spinner";
import AdminHeader from "../../../../Components/admin/AdminHeader";
import Button from "../../../UI/Button/ButtonFull/ButtonFull"
import axios from "axios";
import styles from './Responses.module.css'

class Responses extends Component {
	state = {
		message: ""
	}

	updateState = (e) => {
		const { name, value } = e.target
		this.setState({[name]: value})
	}
	submit = async () => {
		try {

		}
		catch(error){

		}
	}
	render (){
		return (
			<React.Fragment>
				<AdminHeader/>
				<div className={styles.responseContainer}>
					<div className={styles.recipient}>
						To 
						<span className={styles.greyedOut}>
							Recipient
						</span>
					</div>
				<div className={styles.formContainer}>
					<textarea className={styles.input} placeholder="Enter response..." onChange={this.updateState} value={this.state.message} name="message" />
					<Button>Send Reply</Button>
				</div>
				</div>
			</React.Fragment>
		)
	}
}
export default Responses