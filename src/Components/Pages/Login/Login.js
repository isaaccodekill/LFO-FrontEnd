import React , { Component } from 'react'
import Layout from '../../../Containers/Layout/Layout'
import styles from './Login.module.css'

class Login extends Component {
	state = {
		username: "",
		passsword: "", 
	}
	updateState = (e) => {
		const { name, value } = e.target
		this.setState({
			[name] : value
		})
	}
	render (){
		return (
			<Layout login={true}>
				<div className={styles.loginBox}>
					<h2 className="formHeading">
						Login As Administrator
					</h2>
					<form className="formStlye">
						<div className="formGroup">
							<label htmlFor="">
								Username
							</label>
							<input type="text" className="inputStyle" onChange={this.updateState} name="username" value={this.state.username}/>
						</div>
						<div className="formGroup">
							<label htmlFor="">
								Password
							</label>
							<input type="passsword" min="100" className="inputStyle" onChange={this.updateState} value={this.state.passsword}/>
						</div>
						<button className="form-submit">
							Login
						</button>
					</form>
				</div>
			</Layout>

	)
	}
}

export default Login