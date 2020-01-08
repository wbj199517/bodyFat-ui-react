import React, {Component} from  'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
              <Link to="/" className="navbar-brand">BodyFat</Link>
              <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li className="navbar-item">
                <Link to="/food" className="nav-link">Food List</Link>
                </li>
                <li className="navbar-item">
                <Link to="/user" className="nav-link">User</Link>
                </li>
              </ul>
              </div>
            </nav>
          );
    }

}