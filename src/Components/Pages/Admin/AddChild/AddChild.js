import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import AdminHeader from "../../../../Components/admin/AdminHeader";
import axios from "axios";
import "./AddChild.css";

class AddChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePreviewUrl: "",
      name: "",
      sex: "",
      arrival_date: "",
      dob: "",
      taken_from: "",
      brought_by: "",
      file: null,
      pictures: []
    };
    this.handleChange = this.handleChange.bind(this);
    this._handleImageChange = this._handleImageChange.bind(this);
  }

  componentDidMount = () => {
    // this.getChildren();
  };

  handleChange(event) {
    console.log(event);
    this.setState({ name: event.target.value });
  }

  _handleImageChange(e) {
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

  render() {
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
      <div className="">
        <AdminHeader />
        <p className="text-center reg-title">Register a child</p>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Enter child name</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  placeholder="Enter name here"
                  onChange={event =>
                    this.setState({ name: event.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Enter child sex</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.sex}
                  placeholder="Select an option"
                  onChange={event => this.setState({ sex: event.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Enter child Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  value={this.state.dob}
                  placeholder="Enter child Date of Birth"
                  onChange={event => this.setState({ dob: event.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Enter Arrival Date of child</label>
                <input
                  type="date"
                  className="form-control"
                  value={this.state.arrival_date}
                  placeholder="Enter Arrival Date of child"
                  onChange={event =>
                    this.setState({ arrival_date: event.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Enter location child was gotten from</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.taken_from}
                  placeholder="e.g Obanikoro"
                  onChange={event =>
                    this.setState({ taken_from: event.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Enter who brought the child</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.brought_by}
                  placeholder="e.g police"
                  onChange={event =>
                    this.setState({ brought_by: event.target.value })
                  }
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
      </div>
    );
  }
}

export default AddChild;
