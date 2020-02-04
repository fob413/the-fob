import React from "react";

export default function Intro() {
    return (
        <section id="intro">
            <div className="intro-overlay"></div>

            <div className="intro-content">
                <div className="row">

                    <div className="col-twelve">

                        <h5>Hello, World.</h5>
                        <h1>I'm Oluwafunso Oluyole-Balogun.</h1>

                        <p className="intro-position">
                            <span>Full-Stack Developer</span>
                        </p>

                        <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>

                    </div>

                </div>
            </div>

            <ul className="intro-social">
                <li><a href="https://twitter.com/funsho_ob"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/funsho_ob/"><i className="fa fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/in/oluwafunso-oluyole-balogun-17a1b3b5/"><i className="fa fa-linkedin"></i></a> </li>
                <li><a href="https://github.com/fob413"><i className="fa fa-github"></i></a></li>
            </ul>

        </section>
    )
}