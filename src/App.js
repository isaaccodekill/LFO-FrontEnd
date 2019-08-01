import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Layout from "./Containers/Layout/Layout";
import Homepage from "./Components/Pages/Homepage/Homepage";
import AdminListChildren from "./Components/Pages/Admin/ListChildren/ListChildren"
import AdminAddChild from "./Components/Pages/Admin/AddChild/AddChild"
import ChildProfile from "./Components/Pages/Admin/ChildProfile/ChildProfile"
import "./App.css";


//Admin Pages


class App extends Component {
  render() {
    return (
      <HashRouter className="entire-project">
      <div>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/admin/children' component={AdminListChildren} />
        <Route exact path='/admin/children/add' component={AdminAddChild} />
        <Route exact path='/admin/user/profile' component={ChildProfile} />
      </div>
    </HashRouter>
    );
  }
}

export default App;
