import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import Loader from "react-loader-spinner";
import AdminHeader from "../../../../Components/admin/AdminHeader";
import axios from "axios";
import styles from './AddToTimeLine.module.css'

class AddToTimeLine extends Component {
	state = {
		imagePreviewUrl: "",
		timeLine: "",
		description: ""
	}

	updateState = (e) => {
		const { name , value } = e.target
		this.setState({[name] : description})
	}

	updateImage = (e) => {
	    e.preventDefault();
	    let reader = new FileReader();
	    let file = e.target.files[0];

	    reader.onloadend = () => {
	      this.setState({
	        file: file,
	        imagePreviewUrl: reader.result
	      });
	    };
	    reader.readAsDataURL(file);
  }
	render (){
		return (


		)
	}
}
export default AddToTimeLine