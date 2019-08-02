import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import AdminHeader from "../../../../Components/admin/AdminHeader";
import axios from "axios";
import "./AddVisit.css";

class AddVisit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      organization: "",
      phone: "",
      date:"",
      description:""
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
        <p className="text-center reg-title">Add Visitor Record</p>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="form-group">
                <label>Enter full name of visitor</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.fullname}
                  placeholder="e.g Jane Doe"
                  onChange={event =>
                    this.setState({ fullname: event.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Enter organization name</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.organization}
                  placeholder="e.g Google"
                  onChange={event => this.setState({ organization: event.target.value })}
                />
              </div>   
              <div className="form-group">
                <label>Enter phone number</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.p}
                  placeholder="e.g 08103374289"
                  onChange={event => this.setState({ phone: event.target.value })}
                />
              </div>  
              <div className="form-group">
                <label>Enter date of visit</label>
                <input
                  type="date"
                  className="form-control"
                  value={this.state.date}
                  placeholder="Date of visit"
                  onChange={event => this.setState({ date: event.target.value })}
                />
              </div>  
              <div className="form-group">
                <label>Enter purpose of visit</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.description}
                  placeholder="e.g Celebrate birthday"
                  onChange={event => this.setState({ description: event.target.value })}
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

export default AddVisit;
