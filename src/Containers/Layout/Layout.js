import React, { Component } from 'react'
// import AuthNav from '../../Components/auth-navbar/'
// import AuthSide from '../../Components/authSide'
import UnAuthNav from  '../../Components/unauth-navbar/UnAuthNav'
import UnAuthSide from '../../Components/unauth-sidebar/unauth-sidebar'
import Backdrop from '../../Components/UI/Backdrop/Backdrop'


class Layout extends Component {
	state = {
		showsidebar : false,
		authed: false
	}

	closeSideBar = () => {
		this.setState({showsidebar: false})
	}

	openSideBar = () => {
		console.log("Menu has been opened")
		this.setState({showsidebar: true})
	}

	render(){
		return (
			<React.Fragment>
				<Backdrop show={this.state.showsidebar} action={this.closeSideBar}/>
				<UnAuthNav openSideBar={this.openSideBar}/>
				<UnAuthSide closeAction={this.closeSideBar} show={this.state.showsidebar}/>
				{this.props.children}
			</React.Fragment>
		)
	}
}

export default Layout