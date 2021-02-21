import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Main from './components/v1/main';
import Second from './components/v1/second';
import NotFound from './components/v1/NotFound';
import Header from "./components/v1/header";

import Home from "./components/v2/Home";
import Navbar from "./components/v2/common/Navbar";
import Work from "./components/v2/Work";
import Projects from "./components/v2/Projects";

// import Loader from "./components/loader";
import Footer from "./components/v1/footer";

import './css/base.css';
import './css/main.css';
import './css/vendor.css';


function App() {
    return (
        <Router>
            <div style={{ width: "80vw", margin: "auto" }}>
                {/*/!*<Header/>*!/ // v1 header*/}
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/work">
                        <Work/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                    <Route>
                        <NotFound/>
                    </Route>
                </Switch>
                {/*<Footer/> // v1 footer*/}
                {/*<Loader/>*/}
            </div>
        </Router>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
