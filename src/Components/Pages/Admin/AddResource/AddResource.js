import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import AdminHeader from "../../../../Components/admin/AdminHeader";
import axios from "axios";
import "./AddResource.css";

class AddResource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePreviewUrl: "",
      name: "",
      description: "",
      type:"",
      quantity:""
    };
  }

  componentDidMount = () => {
    // this.getChildren();
  };

  render() {
    const { redirect, toUrl } = this.state;

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
        <p className="text-center reg-title">Add Resource</p>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="form-group">
                <label>Enter name of Donor</label>
                <input
                  type="email"
                  className="form-control"
                  value={this.state.name}
                  placeholder="e.g Jane Doe"
                  onChange={event =>
                    this.setState({ name: event.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Enter type</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.type}
                  placeholder="Enter type of Resource brought"
                  onChange={event => this.setState({ type: event.target.value })}
                />
              </div>   
              <div className="form-group">
                <label>Enter description</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.description}
                  placeholder="Enter description of Resource brought"
                  onChange={event => this.setState({ description: event.target.value })}
                />
              </div>  
              <div className="form-group">
                <label>Enter quantity</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.type}
                  placeholder="Enter quantity of Resource brought"
                  onChange={event => this.setState({ quantity: event.target.value })}
                />
              </div>  
              <button className="btn submit-btn mt-4 m-auto">Submit</button>           
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddResource;
