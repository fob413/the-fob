import React, { useEffect } from 'react';
import {
    useLocation,
    Link
} from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

import Typography from "../Typography";

import './index.css';


const Navbar = () => {

    return (
        <div id="main-nav">
            <div id="logo">
                <Link to="/">
                    <img
                        src={require("../../../../images/oluwafunsologo.jpg")}
                        width="130px"
                        alt="Logo"
                    />
                </Link>
            </div>
            <div id="right-nav">
                <div className="right-nav-items">
                    <Link to="/work">
                        <Typography
                            text="work"
                        />
                    </Link>
                </div>
                <div className="right-nav-items">
                    <Link to="/projects">
                        <Typography
                            text="projects"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
