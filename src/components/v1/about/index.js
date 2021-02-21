import React from "react";

export default function About() {
    return (
        <section id="about">

            <div className="row section-intro">
                <div className="col-twelve">

                    <h5>About</h5>
                    <h1>Let me introduce myself.</h1>

                    <div className="intro-info">

                        <img src={require('../../../images/profile-pic.jpg')} alt="Profile Picture" />

                            <p className="lead">Passionate software developer with over 4+ years’ experience in software development, process improvement and on-time delivery of all projects. A self-motivated & committed Individual who loves challenges, quick to learn and appreciates feedback.</p>
                    </div>

                </div>
            </div>

            <div className="row about-content">

                <div className="col-six tab-full">

                    <ul className="info-list">
                        <li>
                            <strong>Fullname:</strong>
                            <span>Oluwafunso Oluyole-Balogun</span>
                        </li>
                        <li>
                            <strong>Birth Date:</strong>
                            <span>February 01</span>
                        </li>
                        <li>
                            <strong>Job:</strong>
                            <span>FullStack Software Engineer</span>
                        </li>
                        <li>
                            <strong>Website:</strong>
                            <span>www.oluwafunso.dev</span>
                        </li>
                        <li>
                            <strong>Email:</strong>
                            <span>oluwafunso.oluyole.balogun@gmail.com</span>
                        </li>

                    </ul>

                </div>

                <div className="col-six tab-full">

                    <h3>Skills</h3>

                    <ul className="skill-bars">
                        <li>
                            <div className="progress percent85"><span>85%</span></div>
                            <strong>JavaScript</strong>
                        </li>
                        <li>
                            <div className="progress percent85"><span>85%</span></div>
                            <strong>NODE</strong>
                        </li>
                        <li>
                            <div className="progress percent85"><span>85%</span></div>
                            <strong>React & Redux</strong>
                        </li>
                        <li>
                            <div className="progress percent85"><span>85%</span></div>
                            <strong>Angular</strong>
                        </li>
                        <li>
                            <div className="progress percent85"><span>85%</span></div>
                            <strong>Python</strong>
                        </li>
                        <li>
                            <div className="progress percent85"><span>85%</span></div>
                            <strong>Django</strong>
                        </li>
                        <li>
                            <div className="progress percent85"><span>85%</span></div>
                            <strong>Flask</strong>
                        </li>
                        <li>
                            <div className="progress percent85"><span>85%</span></div>
                            <strong>MySQL</strong>
                        </li>
                        <li>
                            <div className="progress percent85"><span>85%</span></div>
                            <strong>Postgres</strong>
                        </li>
                        <li>
                            <div className="progress percent85"><span>85%</span></div>
                            <strong>MongoDB</strong>
                        </li>
                        <li>
                            <div className="progress percent85"><span>85%</span></div>
                            <strong>Version Control (GIT)</strong>
                        </li>
                        <li>
                            <div className="progress percent85"><span>85%</span></div>
                            <strong>HTML5</strong>
                        </li>
                        <li>
                            <div className="progress percent85"><span>85%</span></div>
                            <strong>CSS3</strong>
                        </li>

                    </ul>

                </div>

            </div>

            <div className="row button-section">
                <div className="col-twelve">
                    <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
                    {/*<a href="#" title="Download CV" className="button button-primary">Download CV</a>*/}
                </div>
            </div>

        </section>
    )
}
