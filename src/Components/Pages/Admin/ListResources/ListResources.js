import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import Loader from "react-loader-spinner";
import AdminHeader from "../../../../Components/admin/AdminHeader";
import axios from "axios";
import "./ListResources.css";

class ListResources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: [
        {
          name: "Jane Doe",
          description: "Incididunt ut in ex ad occaecat proident sint aute.",
          type: "Type of Resource",
          quantity: "55",
        },
        
      ]
    };
  }

  componentDidMount = () => {
    // this.getChildren();
  };

  mapResourcesTable() {
    let items = <tr style={{ width: '100%' }} className="col-md-12" >Nothing</tr>
    // if(this.state.maritalStatuses){
    if (this.state.resources != undefined && this.state.resources.length > 0) {
        items = this.state.resources.map(item => {
            return (
                <tr key={item.name}>
                <th scope="row">{item.name}</th>
                <td>{item.description}</td>
                <td>{item.type}</td>
                <td>{item.quantity}</td>
              </tr>
            )
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
        <NavLink to= '/admin/resources/add' className="btn btn-outline add-btn my-2 my-sm-0">
          {" "}
          + Add Resource
        </NavLink>
        <table class="table table-striped tablle-responsive">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Type</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
              {this.mapResourcesTable()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListResources;
