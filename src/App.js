import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Layout from "./Containers/Layout/Layout";
import Homepage from "./Components/Pages/Homepage/Homepage";
import "./App.css";

//Admin Pages
import AdminListChildren from "./Components/Pages/Admin/ListChildren/ListChildren"
import AdminAddChild from "./Components/Pages/Admin/AddChild/AddChild"
import ChildProfile from "./Components/Pages/Admin/ChildProfile/ChildProfile"
import AdminLogin from "./Components/Pages/Admin/AdminLogin/AdminLogin"
import AdminListResources from "./Components/Pages/Admin/ListResources/ListResources"
import AdminAddResource from "./Components/Pages/Admin/AddResource/AddResource"
import AdminAddVisit from "./Components/Pages/Admin/AddVisit/AddVisit"
import AdminListVisit from "./Components/Pages/Admin/ListVisit/ListVisit"


class App extends Component {
  render() {
    return (
      <HashRouter className="entire-project">
      <div>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/admin/children' component={AdminListChildren} />
        <Route exact path='/admin/children/add' component={AdminAddChild} />
        <Route exact path='/admin/user/profile' component={ChildProfile} />
        <Route exact path='/admin/login' component={AdminLogin} />
        <Route exact path='/admin/resources' component={AdminListResources} />
        <Route exact path='/admin/resources/add' component={AdminAddResource} />
        <Route exact path='/admin/visit' component={AdminListVisit} />
        <Route exact path='/admin/visit/add' component={AdminAddVisit} />
      </div>
    </HashRouter>
    );
  }
}

export default App;
