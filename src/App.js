import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Layout from "./Containers/Layout/Layout";
import Homepage from "./Components/Pages/Homepage/Homepage";
import AdminListChildren from "./Components/Pages/Admin/ListChildren/ListChildren"
import "./App.css";


//Admin Pages


class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/admin/children' component={AdminListChildren} />
      </div>
    </HashRouter>
    );
  }
}

export default App;
