import React, { render, Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Timeline, Event } from "react-timeline-scribble";
import axios from "axios";
import Loader from "react-loader-spinner";
// import Timeline from 'react-image-timeline';
// import 'react-image-timeline/dist/timeline.css';
import "./Timelines.css";

class Timelines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      events: [
        {
          date: new Date(2013, 9, 27),
          text:
            "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.",
          title: "Cairo, Egypt",
          imageUrl:
            "http://github.com/aaron9000/react-image-timeline/blob/master/src/assets/cairo.jpg?raw=true"
        }
      ]
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
        <Fragment>
          <h1>React Timeline Scribble</h1>
          <Timeline>
            <Event interval={"2016 – 2018"} title={""} subtitle={""}>
            <img src="https://res.cloudinary.com/dldd8ucby/image/upload/v1561660595/Ellipse_2.png" />
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Event>
          </Timeline>
        </Fragment>
      </div>
    );
  }
}

export default Timelines;
