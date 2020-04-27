import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

/* Helpers */
import { currentSeason } from "./helpers/helpers";

/* Components */
import Navbar from "./components/Navbar/Navbar";
/* Page */
import Winter from "./pages/Winter";
import Spring from "./pages/Spring";
import Summer from "./pages/Summer";
import Fall from "./pages/Fall";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" render={() => <Redirect to={currentSeason().url} />}></Route>
                <Route exact path="/Winter-2020" component={() => <Winter currentSeason={currentSeason().name} season="WINTER" />}></Route>
                <Route exact path="/Spring-2020" component={() => <Spring currentSeason={currentSeason().name} season="SPRING" />}></Route>
                <Route exact path="/Summer-2020" component={() => <Summer currentSeason={currentSeason().name} season="SUMMER" />}></Route>
                <Route exact path="/Fall-2020" component={() => <Fall currentSeason={currentSeason().name} season="FALL" />}></Route>
            </Switch>
        </Router>
    );
}

export default App;
