import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import Loader from "react-loader-spinner";
import AdminHeader from "../../../Components/admin/AdminHeader";
import axios from "axios";
import './AddToTimeLine.module.css'

class AddToTimeLine extends Component {
	state = {
		imagePreviewUrl: "",
		timeLine: "",
		description: ""
	}

	updateState = (e) => {
		const { name , value } = e.target
		this.setState({[name] : value})
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

		const { redirect, toUrl } = this.state;
    const imagePreviewUrl = this.state.imagePreviewUrl;
    let imagePreview;

    if (imagePreviewUrl) {
      imagePreview = <img src={imagePreviewUrl} alt="" />;
    } else {
      imagePreview = (
        <div className="previewText">Please select an Image for upload</div>
      );
    }

    if (redirect && toUrl) {
      return <Redirect to={toUrl} />;
    }

    const loading = this.state.loading;
    let load;

    if (loading) {
      load = <Loader type="ThreeDots" color="#00BFFF" height="50" width="50" />;
    } else {
      load = "";
    }

		return (
			<React.Fragment>
				 <AdminHeader />
        <p className="text-center reg-title">Add A TimeLine</p>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Enter Time Span</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  placeholder="Enter Time span"
                  onChange={event =>
                    this.setState({ Time: event.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Enter Description</label>
                <textarea
                  type="text"
                  className="form-control"
                  value={this.state.brought_by}
                  placeholder="Description"
                  onChange={event =>
                    this.setState({ description: event.target.value })
                  }
                  style={{
                  	height: "300px"
                  }}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="imgPreview">{imagePreview}</div>
              <form>
                <input
                  className="fileInput "
                  type="file"
                  accept="image/*"
                  onChange={e => this._handleImageChange(e)}
                />
              </form>
            </div>
          <button className="btn submit-btn mt-4 m-auto">Submit</button>
          </div>
        </div>
			</React.Fragment>

		)
	}
}
export default AddToTimeLine