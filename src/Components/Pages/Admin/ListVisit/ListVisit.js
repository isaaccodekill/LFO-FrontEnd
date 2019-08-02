import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import Loader from "react-loader-spinner";
import AdminHeader from "../../../../Components/admin/AdminHeader";
import axios from "axios";
import "./ListVisit.css";

class ListVisit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visit: [
        {
          fullname: "Jane Doe",
          organization: "Google",
          phone: "289833",
          date: "22nd June 1995",
          description: "Voluptate commodo exercitation sint labore culpa est quis amet ad consequat.",
        },
        {
          fullname: "Jane Doe",
          organization: "Google",
          phone: "289833",
          date: "22nd June 1995",
          description: "Voluptate commodo exercitation sint labore culpa est quis amet ad consequat.",
        },

      ],
      redirect: false,
      toUrl: ""
    };
  }

  componentDidMount = () => {
    // this.getChildren();
  };

  mapVisitTable() {
    let items = (
      <tr style={{ width: "100%" }} className="col-md-12">
        Nothing
      </tr>
    );
    if (this.state.visit != undefined && this.state.visit.length > 0) {
      items = this.state.visit.map(item => {
        return (
          <tr key={item.fullname}>
            <th scope="row">{item.fullname}</th>
            <td>{item.organization}</td>
            <td>{item.phone}</td>
            <td>{item.date}</td>
            <td>{item.description}</td>
          </tr>
        );
      });
    }

    return items;
  }

  render() {
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
        <NavLink
          to="/admin/visit/add"
          className="btn btn-outline add-btn my-2 my-sm-0"
        >
          {" "}
          + Add Visitation Record
        </NavLink>
        <table class="table table-striped tablle-responsive">
          <thead>
            <tr>
              <th scope="col">Full Name</th>
              <th scope="col">Organization</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Date of Visit</th>
              <th scope="col">Purpose</th>
            </tr>
          </thead>
          <tbody>{this.mapVisitTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default ListVisit;
