import React, { Component } from "react";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import { HashRouter, Switch } from "react-router-dom";
import Layout from "./Containers/Layout/Layout";
import Homepage from "./Components/Pages/Homepage/Homepage";
import Donation from "./Components/Pages/Users/Donation/Donation"
import Visit from "./Components/Pages/Users/visitorsForm/VisitorsForm"
import Login from "./Components/Pages/Login/Login"
import AdminListChildren from "./Components/Pages/Admin/ListChildren/ListChildren"
import AdminAddChild from "./Components/Pages/Admin/AddChild/AddChild"
import ChildProfile from "./Components/Pages/Admin/ChildProfile/ChildProfile"
import "./App.css";


//Admin Pages


class App extends Component {
  render() {
    return (
      <BrowserRouter className="entire-project">
      <div>
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/Donate' component={Donation} />
            <Route exact path='/visit' component={Visit} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/admin/children' component={AdminListChildren} />
            <Route exact path='/admin/children/add' component={AdminAddChild} />
            <Route exact path='/admin/user/profile' component={ChildProfile} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
