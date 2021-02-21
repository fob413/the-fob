import React from "react";


export default function Footer () {
    return (
        <footer>
            <div className="row">

                <div className="col-six tab-full pull-right social">

                    <ul className="footer-social">
                        <li><a href="https://twitter.com/funsho_ob"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/funsho_ob/"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/oluwafunso-oluyole-balogun-17a1b3b5/"><i className="fa fa-linkedin"></i></a> </li>
                        <li><a href="https://github.com/fob413"><i className="fa fa-github"></i></a></li>
                    </ul>

                </div>

                <div className="col-six tab-full">
                    <div className="copyright">
                        <span>Design by <a href="http://www.styleshout.com/">styleshout</a></span>
                    </div>
                </div>

                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#top"><i className="fa fa-long-arrow-up"></i></a>
                </div>

            </div>
        </footer>
    )
}