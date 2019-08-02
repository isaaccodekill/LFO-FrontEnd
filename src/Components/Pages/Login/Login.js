import React from 'react'
import Layout from '../../../Containers/Layout/Layout'
import styles from './Login.module.css'

const Login = () => {
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
						<input type="text" className="inputStyle"/>
					</div>
					<div className="formGroup">
						<label htmlFor="">
							Password
						</label>
						<input type="passsword" min="100" className="inputStyle"/>
					</div>
					<button className="form-submit">
						Login
					</button>
				</form>
			</div>
		</Layout>

	)
}

export default Login