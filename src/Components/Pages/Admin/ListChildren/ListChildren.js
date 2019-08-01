import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import AdminHeader from "../../../../Components/admin/AdminHeader"
import axios from "axios";

class ListChildren extends Component {
  constructor(props) {
    super(props);
    this.state = {
        children:[]
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
          <AdminHeader/>
      </div>
    );
  }
}

export default ListChildren
