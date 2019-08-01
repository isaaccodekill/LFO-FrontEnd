import React, { Component } from 'react'
// import AuthNav from '../../Components/auth-navbar/'
// import AuthSide from '../../Components/authSide'
import UnAuthNav from  '../../Components/unauth-navbar/UnauthNav'
import UnAuthSide from '../../Components/unauth-sidebar/unauth-sidebar'
import backdrop from ''


class Layout extends Component {
	state = {
		showsidebar : false,
		authed: false
	}

	closeSideBar = () => {
		this.setState({showsidebar: false})
	}

	openSideBar = () => {
		this.setState({showsidebar: true})
	}

	render(){
		return (
			<React.Fragment>
				<backdrop show={this.sate.showSide} action={this.closeSidebar}/>
				<UnAuthNav openSideBar={this.openSideBar}/>
				<UnAuthSide closeAction={this.closeSidebar} show={this.state.showsidebar}/>
				{this.props.children}
			</React.Fragment>
		)
	}
}

export default Layout