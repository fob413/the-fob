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

import './css/base.css';
import './css/main.css';
import './css/vendor.css';


function App() {
    return (
        <Router>
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
        </Router>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
