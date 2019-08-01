import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import AdminHeader from "../../../../Components/admin/AdminHeader";
import { Timeline, TimelineEvent } from "react-event-timeline";
import axios from "axios";
import "./ChildProfile.css";

class AddChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
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
        <img src="https://res.cloudinary.com/dldd8ucby/image/upload/v1561660595/Ellipse_2.png" />
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 offset-md-4">
              <div className="bio text-center">
                <p className="child-name">Jane Doe</p>
                <p className="d-flex justify-content-between">
                  <p>
                    <span className="bio-title">Born:</span>
                    <span className="bio-content">Date of Birth</span>
                  </p>
                  <p>
                    <span className="bio-title">Born:</span>
                    <span className="bio-content">Date of Birth</span>
                  </p>
                </p>
                <p className="d-flex justify-content-between">
                  <p>
                    <span className="bio-title">Born:</span>
                    <span className="bio-content">Date of Birth</span>
                  </p>
                  <p>
                    <span className="bio-title">Born:</span>
                    <span className="bio-content">Date of Birth</span>
                  </p>
                </p>
              </div>
            </div>
          </div>
          <Timeline>
            <TimelineEvent
              title="John Doe sent a SMS"
              createdAt="2016-09-12 10:06 PM"
              icon={<i className="material-icons md-18">textsms</i>}
            >
                <img src="https://res.cloudinary.com/dldd8ucby/image/upload/v1561660595/Ellipse_2.png" />
              I received the payment for $543. Should be shipping the item
              within a couple of hours.
            </TimelineEvent>
            <TimelineEvent
              title="You sent an email to John Doe"
              createdAt="2016-09-11 09:06 AM"
              icon={<i className="material-icons md-18">email</i>}
            >
              Like we talked, you said that you would share the shipment
              details? This is an urgent order and so I am losing patience. Can
              you expedite the process and pls do share the details asap.
              Consider this a gentle reminder if you are on track already!
            </TimelineEvent>
          </Timeline>
        </div>
      </div>
    );
  }
}

export default AddChild;
