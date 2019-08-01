import React, { Component } from 'react';
import Layout from './Containers/Layout/Layout'
import Homepage from './Components/Pages/Homepage/Homepage'
import './App.css';

class App extends Component {
    render (){
      return (    
          <Layout>
            <Homepage/>
          </Layout>
      )
    }    
}

export default App