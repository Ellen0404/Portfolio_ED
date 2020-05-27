import React from "react";

import { Link, NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <>
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark ">
                <Link to="/" className="navbar-brand ">Home</Link>
                <div>
                    <div>
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item color" >
                                <NavLink to={process.env.PUBLIC_URL + '/'}
                                    className="nav-link "
                                    isActive={() => window.location.pathname === "/"}
                                    activeClassName="active "
                                >
                                    Home
    </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={process.env.PUBLIC_URL + '/project'} className="nav-link">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={process.env.PUBLIC_URL + '/contact'} className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Nav;