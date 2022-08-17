import {
    NavLink,
  } from "react-router-dom";

const Nav = () => {
    return (
        <ul>
            <li><NavLink to="/dancing">Dancing</NavLink></li>
            <li><NavLink to="/cars">Cars</NavLink></li>
            <li><NavLink to="/computers">Computers</NavLink></li>
            <li><NavLink to="/ferrari">Ferrari</NavLink></li>
        </ul>
    );
}

export default Nav;