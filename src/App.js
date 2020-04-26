import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Page */
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
            </Switch>
        </Router>
    );
}

export default App;
