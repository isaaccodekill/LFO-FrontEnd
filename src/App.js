import React, { Component } from "react";
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Router,
  Route,
  Link
} from "react-router-dom";
import Layout from "./Containers/Layout/Layout";
import Homepage from "./Components/Pages/Homepage/Homepage";
import Donation from "./Components/Pages/Users/Donation/Donation";
import Visit from "./Components/Pages/Users/visitorsForm/VisitorsForm";
import Login from "./Components/Pages/Login/Login";
import "./App.css";

//Admin Pages
import AdminListChildren from "./Components/Pages/Admin/ListChildren/ListChildren";
import AdminAddChild from "./Components/Pages/Admin/AddChild/AddChild";
import ChildProfile from "./Components/Pages/Admin/ChildProfile/ChildProfile";
import AdminLogin from "./Components/Pages/Admin/AdminLogin/AdminLogin";
import AdminListResources from "./Components/Pages/Admin/ListResources/ListResources";
import AdminAddResource from "./Components/Pages/Admin/AddResource/AddResource";
import AdminAddVisit from "./Components/Pages/Admin/AddVisit/AddVisit";
import AdminListVisit from "./Components/Pages/Admin/ListVisit/ListVisit";
import AdminListDonation from "./Components/Pages/Admin/ListDonations/ListDonations";
import AdminListMessages from "./Components/Pages/Admin/ListContactMessages/ListContactMessages";
import AdminSendResponse from "./Components/Pages/Admin/Responses/Responses"



class App extends Component {
  render() {
    return (
      <BrowserRouter className="entire-project">
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Donate" component={Donation} />
            <Route exact path="/visit" component={Visit} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={AdminListChildren} />
            <Route exact path="/admin/children" component={AdminListChildren} />
            <Route exact path="/admin/children/add" component={AdminAddChild} />
            <Route exact path="/admin/user/profile" component={ChildProfile} />
            <Route exact path="/admin/login" component={AdminLogin} />
            <Route
              exact
              path="/admin/resources"
              component={AdminListResources}
            />
            <Route
              exact
              path="/admin/resources/add"
              component={AdminAddResource}
            />
            <Route exact path="/admin/visit" component={AdminListVisit} />
            <Route exact path="/admin/visit/add" component={AdminAddVisit} />
            <Route
              exact
              path="/admin/donations"
              component={AdminListDonation}
            />
            <Route exact path="/admin/messages" component={AdminListMessages} />
            <Route exact path="/admin/messages/respond" component={AdminSendResponse} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
