import React from "react";
import {Link} from "react-router-dom";
import $ from 'jquery';


export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu () {
        let toggleButton = $('.menu-toggle'),
            nav = $('.main-navigation');

        toggleButton.toggleClass('is-cl`icked');
        nav.slideToggle();
    }

    render() {
        return (
            <header>
                <div className="row">
                    <div className="top-bar">
                        <div className="menu-toggle" onClick={this.toggleMenu}><span>Menu</span></div>

                        <div className="logo">
                            {/*<a href="index.html">FOB</a>*/}
                            <Link to="/">FOB</Link>
                        </div>

                        <nav id="main-nav-wrap">
                            <ul className="main-navigation">
                                <li className="current"><a className="smoothscroll" href="#intro" title="">Home</a></li>
                                <li><a className="smoothscroll" href="#about" title="">About</a></li>
                                <li><a className="smoothscroll" href="#resume" title="">Resume</a></li>
                                <li><a className="smoothscroll" href="#portfolio" title="">Portfolio</a></li>
                                <li><a className="smoothscroll" href="#services" title="">Services</a></li>
                                <li><a className="smoothscroll" href="#contact" title="">Contact</a></li>
                                <li><a href="styles.html" title="">Style Demo</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
