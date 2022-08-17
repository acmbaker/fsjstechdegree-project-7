import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Nav extends Component {

    render() {
        return (
        <Router>
            <ul>
                <li><NavLink to="/dancing" searchKey="Dancing">Dancing</NavLink></li>
                <li><NavLink to="/cars" searchKey="Cars">Cars</NavLink></li>
                <li><NavLink to="/computers" searchKey="Computers">Computers</NavLink></li>
                <li><NavLink to="/ferrari" searchKey="Ferrari">Ferrari</NavLink></li>
          </ul>
        </Router>
        );
    }
}

export default Nav;