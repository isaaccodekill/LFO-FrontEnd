import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import Loader from "react-loader-spinner";
import AdminHeader from "../../../../Components/admin/AdminHeader";
import axios from "axios";
import "./ListDonations.css";

class ListDonations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donation: [
        {
          name: "Jane Doe",
          amount: "25,000",
          description: "Donation from DSC",
          phone: "244545454",
        },
        {
          name: "Jane Doe",
          amount: "25,000",
          description: "Donation from DSC",
          phone: "244545454",
        },
        {
          name: "Jane Doe",
          amount: "25,000",
          description: "Donation from DSC",
          phone: "244545454",
        },
        {
          name: "John Doe",
          amount: "30,000",
          description: "Donation from Local man",
          phone: "244545454",
        },
      ],
      redirect: false,
      toUrl: ""
    };
  }

  componentDidMount = () => {
    // this.getChildren();
  };

  mapDonationTable() {
    let items = (
      <tr style={{ width: "100%" }} className="col-md-12">
        Nothing
      </tr>
    );
    // if(this.state.maritalStatuses){
    if (this.state.donation != undefined && this.state.donation.length > 0) {
      items = this.state.donation.map(item => {
        return (
          <tr key={item.name}>
            <th scope="row">{item.name}</th>
            <td>{item.amount}</td>
            <td>{item.description}</td>
            <td>{item.phone}</td>
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
        <p className="text-center reg-title">Donations</p>
        <table class="table table-striped tablle-responsive">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Amount(N)</th>
              <th scope="col">Description</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>{this.mapDonationTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default ListDonations;
