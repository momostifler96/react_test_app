import React from 'react';
import './../asset/navAsset.css';
import './../asset/navAsset';

import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-custom navbar-mainbg">
        <Link className="navbar-brand navbar-logo" to="home">Navbar</Link>
        <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><i className="fas fa-tachometer-alt"></i> Tableau de bord</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="javascript:void(0);"><i className="far fa-address-book"></i>Mon compte</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><i className="far fa-clone"></i>Composant</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><i className="far fa-calendar-alt"></i>Calendrier</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><i className="far fa-chart-bar"></i>Charts</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><i className="far fa-copy"></i>Documents</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Nav
