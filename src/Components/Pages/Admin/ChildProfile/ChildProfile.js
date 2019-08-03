import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";
import AdminHeader from "../../../../Components/admin/AdminHeader";
import ChilldTimelines from "../../../../Components/admin/Timeline/Timelines";
import Button from "../../../UI/Button/ButtonFull/ButtonFull"
import "./ChildProfile.css";



class AddChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount = () => {
    // this.getChildren();
  };
  AddToTimeline = () => {
    this.props.history.push("/admin/child/AddTimeLine")
  }

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
        <img src="https://res.cloudinary.com/dldd8ucby/image/upload/v1561660595/Ellipse_2.png" />
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 offset-md-4">
              <div className="bio text-center">
                <p className="child-name">Jane Doe</p>
                <p className="d-flex justify-content-between">
                  <p>
                    <span className="bio-title">Born:</span>
                    <span className="bio-content">01 Jan 1970</span>
                  </p>
                  <p>
                    <span className="bio-title">Taken From:</span>
                    <span className="bio-content">Lorem ipsum</span>
                  </p>
                </p>
                <p className="d-flex justify-content-between">
                  <p>
                    <span className="bio-title">Arrived:</span>
                    <span className="bio-content">01 Jan 1990</span>
                  </p>
                  <p>
                    <span className="bio-title">Brought By:</span>
                    <span className="bio-content">Lorem ipsum</span>
                  </p>
                </p>
              </div>
            </div>
          </div>
          <Button action={this.AddToTimeline}>Add to timeLine</Button>
        <ChilldTimelines/>
        </div>
      </div>
    );
  }
}

export default AddChild;
