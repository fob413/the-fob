import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Main from './components/main';
import Second from './components/second';
import NotFound from './components/NotFound';
import Header from "./components/header";
// import Loader from "./components/loader";
import Footer from "./components/footer";

import './css/base.css';
import './css/main.css';
import './css/vendor.css';


function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route path="/about">
                    <Second/>
                </Route>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
            <Footer/>
            {/*<Loader/>*/}
        </Router>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
