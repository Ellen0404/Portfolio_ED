import React from "react";

import { Link, NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <>
            <nav className="navbar floated-right navbar-expand-lg navbar-dark bg-dark ">
                <Link to="/" className="navbar-brand ">Home</Link>
                <div>
                    <ul className="navbar-nav ">

                        <li className="nav-item color" >
                            <NavLink to="/"
                                className="nav-link "
                                isActive={() => window.location.pathname === "/"}
                                activeClassName="active "
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/project" className="nav-link">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav;