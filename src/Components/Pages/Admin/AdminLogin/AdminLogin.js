import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import AdminHeader from "../../../../Components/admin/AdminHeader";
import axios from "axios";
import "./AdminLogin.css";

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePreviewUrl: "",
      email: "",
      password: ""
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
        <p className="text-center reg-title">Admin Login</p>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="form-group">
                <label>Enter email</label>
                <input
                  type="email"
                  className="form-control"
                  value={this.state.email}
                  placeholder="e.g mail@mail.com"
                  onChange={event =>
                    this.setState({ email: event.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Enter password</label>
                <input
                  type="password"
                  className="form-control"
                  value={this.state.password}
                  placeholder="***"
                  onChange={event => this.setState({ password: event.target.value })}
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

export default AdminLogin;
