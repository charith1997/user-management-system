import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid mx-5">
            <span className="navbar-brand" href="#">
        User Manager
      </span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Overview</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/organizations">Organizations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Header
