import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import AdminHeader from "../../../../Components/admin/AdminHeader";
import axios from "axios";
import "./ListChildren.css";

class ListChildren extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [
        {
          name: "Jane Doe",
          sex: "Male",
          arrival_date: "22nd June 2019",
          dob: "22nd June 1995",
          taken_from: "New Hall",
          brought_by: "Unilag Security"
        },
        {
            name: "Jane Doe",
            sex: "Male",
            arrival_date: "22nd June 2019",
            dob: "22nd June 1995",
            taken_from: "New Hall",
            brought_by: "Unilag Security"
          },
          {
            name: "Jane Doe",
            sex: "Male",
            arrival_date: "22nd June 2019",
            dob: "22nd June 1995",
            taken_from: "New Hall",
            brought_by: "Unilag Security"
          },
          {
            name: "Jane Doe",
            sex: "Male",
            arrival_date: "22nd June 2019",
            dob: "22nd June 1995",
            taken_from: "New Hall",
            brought_by: "Unilag Security"
          }
      ]
    };
  }

  componentDidMount = () => {
    // this.getChildren();
  };

  mapChildrenTable() {
    let items = <tr style={{ width: '100%' }} className="col-md-12" >Nothing</tr>
    // if(this.state.maritalStatuses){
    if (this.state.children != undefined && this.state.children.length > 0) {
        items = this.state.children.map(item => {
            return (
                <tr key={item.name}>
                <th scope="row">{item.name}</th>
                <td>{item.sex}</td>
                <td>{item.arrival_date}</td>
                <td>{item.dob}</td>
                <td>{item.taken_from}</td>
                <td>{item.brought_by}</td>
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
        <button className="btn btn-outline add-btn my-2 my-sm-0" type="submit">
          {" "}
          + Register a Child
        </button>
        <table class="table table-striped tablle-responsive">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Sex</th>
              <th scope="col">Arrival Date</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Taken from</th>
              <th scope="col">Brought by</th>
            </tr>
          </thead>
          <tbody>
              {this.mapChildrenTable()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListChildren;
