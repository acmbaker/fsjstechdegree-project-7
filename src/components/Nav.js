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
                <li><Link to="/dancing">Dancing</Link></li>
                <li><Link to="/cars">Cars</Link></li>
                <li><Link to="/computers">Computers</Link></li>
                <li><Link to="/ferrari">Ferrari</Link></li>
          </ul>
        </Router>
        );
    }
}

export default Nav;