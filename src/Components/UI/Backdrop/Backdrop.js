import React from "react"

const Backdrop  = (props) => {

	const styleBackdrop = {
		position: 'fixed',
		height: '100%',
		minHeight: '100vh',
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		width: '100%',
		zIndex: '2',
		display: props.show ? "block" : "none"
	}


	return (
		<div onClick={props.action} style={styleBackdrop}></div>
	)
}


export default Backdrop;