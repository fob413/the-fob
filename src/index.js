import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Fob from './components/fob';
import Second from './components/second';
import NotFound from './components/NotFound';


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Fob/>
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
