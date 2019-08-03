import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import Loader from "react-loader-spinner";
import AdminHeader from "../../../../Components/admin/AdminHeader";
import axios from "axios";
import "./ListContactMessages.css";

class ListContactMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          email: "mail@mail.com",
          message: "Sit veniam consequat laboris est ad."
        },
        {
          email: "mail@mail.com",
          message: "Sit veniam consequat laboris est ad."
        }
      ]
    };
  }

  componentDidMount = () => {
    // this.getChildren();
  };

  mapMessagesTable() {
    let items = (
      <tr style={{ width: "100%" }} className="col-md-12">
        Nothing
      </tr>
    );
    // if(this.state.maritalStatuses){
    if (this.state.messages != undefined && this.state.messages.length > 0) {
      items = this.state.messages.map(item => {
        return (
          <tr key={item.email}>
            <th scope="row">{item.email}</th>
            <td>{item.message}</td>
            <div class="btn-group" role="group" aria-label="Basic example">
              <NavLink to="/admin/messages/respond">
                    <button type="button" class="btn btn-success m-2">
                        Reply
                    </button>
              </NavLink>
              <button type="button" class="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </tr>
        );
      });
    }

    return items;
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
        <p className="text-center reg-title">Contact Messages</p>
        <table class="table table-striped tablle-responsive">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Message</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{this.mapMessagesTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default ListContactMessages;
