import React from 'react'
import './AdminHeader.css'

const AdminHeader = () => {
	return (

        <nav className="my-navbar navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">THE LFO</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
              <a className="nav-link" href="#">Children</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">Resources</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Visitation</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">Donations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Messages</a>
            </li>
          </ul>
          <button className="btn btn-outline log-out-btn my-2 my-sm-0" type="submit">Logout</button>
        </div>
      </nav>
			
	)
}
export default AdminHeader