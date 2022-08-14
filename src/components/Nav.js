import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Nav extends Component {
    
    render() {
        return (
        <Router>
            <ul>
                <Link to="/dancing">Dancing</Link>
                <Link to="/cars">Cars</Link>
                <Link to="/computers">Computers</Link>
                <Link to="/ferrari">Ferrari</Link>
          </ul>
        </Router>
        );
    }
}

export default Nav;