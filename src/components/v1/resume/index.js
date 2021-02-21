import React from "react";


export default function Resume() {
    return (
        <section id="resume" className="grey-section">

            <div className="row section-intro">
                <div className="col-twelve">

                    <h5>Resume</h5>
                    <h1>More of my credentials.</h1>

                </div>
            </div>

            <div className="row resume-timeline">

                <div className="col-twelve resume-header">

                    <h2>Work Experience</h2>

                </div>

                <div className="col-twelve">

                    <div className="timeline-wrap">

                        <div className="timeline-block">

                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap"></i>
                            </div>

                            <div className="timeline-header">
                                <h3>Software Engineer</h3>
                                <p>March 2019 - Present</p>
                            </div>

                            <div className="timeline-content">
                                <h4>Voyage Control</h4>
                                <p>Voyage Control is an appointment management platform.
                                    Technologies used include Javascript/Angular, Typescript, Python/Flask, and Python/Django. Tools used include Docker, Github, Jira, Test Driven Development amongst many others.</p>
                            </div>

                        </div>

                        <div className="timeline-block">

                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap"></i>
                            </div>

                            <div className="timeline-header">
                                <h3>Backend Engineer</h3>
                                <p>October 2018 - February 2019</p>
                            </div>

                            <div className="timeline-content">
                                <h4>3x3Insights</h4>
                                <p>3x3Insights is a beverage consumer analytics platform.
                                    Technologies used include Python. Tools used: Gitlab.</p>
                            </div>

                        </div>


                        <div className="timeline-block">

                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap"></i>
                            </div>

                            <div className="timeline-header">
                                <h3>Software Engineer</h3>
                                <p>August 2017 - Present</p>
                            </div>

                            <div className="timeline-content">
                                <h4>Andela</h4>
                                <p>Andela is an African company that identifies and develops software developers.
                                    Building pixel perfect and responsive websites based on wireframes from the design team with Javascript/React, Javascript/Angular and SCSS. Website functionalities are properly tested using Enzyme and Jest.
                                    Building and maintaining RESTful APIs with Python/Flask and Javascript/Express
                                    using Postgres database and Flask-sqlalchemy ORM. Unit tests are written to ensure the application behave as required.</p>
                            </div>

                        </div>

                        <div className="timeline-block">

                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap"></i>
                            </div>

                            <div className="timeline-header">
                                <h3>Front-End Designer</h3>
                                <p>February 2017 - July 2017</p>
                            </div>

                            <div className="timeline-content">
                                <h4>Anakle (Intern)</h4>
                                <p>Anakle is a digital agency, building experiences for online and offline audiences. The team
                                    develops strategies and executes campaigns for clients and agencies.
                                    Worked as a front-end designer using Adobe Photoshop, Adobe Illustrator, Adobe XD, Javascript, Jquery, HTML & CSS, Bootstrap and Materializecss to design and responsive applications.</p>
                            </div>

                        </div>

                        <div className="timeline-block">

                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap"></i>
                            </div>

                            <div className="timeline-header">
                                <h3>Front-End Developer</h3>
                                <p>April 2015 - January 2017</p>
                            </div>

                            <div className="timeline-content">
                                <h4>Freelance</h4>
                                <p>Worked as a front-env developer using HTML & CSS, Bootstrap, Materializecss, Javascript, Jquery,
                                    Adobe Photoshop, Adobe Illustrator and Adobe XD to design and build responsive applications.</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="row resume-timeline">

                <div className="col-twelve resume-header">

                    <h2>Education</h2>

                </div>

                <div className="col-twelve">

                    <div className="timeline-wrap">

                        <div className="timeline-block">

                            <div className="timeline-ico">
                                <i className="fa fa-briefcase"></i>
                            </div>

                            <div className="timeline-header">
                                <h3>Bachelor's Degree</h3>
                                <p>2010 - 2015</p>
                            </div>

                            <div className="timeline-content">
                                <h4>University of Ibadan</h4>
                                <p>B.Sc Statistics.</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}
