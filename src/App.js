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
import TBA from "./pages/TBA";
import Archive from "./pages/Archive";
import Airing from "./pages/Airing";
import Search from "./pages/Search";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" render={() => <Redirect to={currentSeason().url} />}></Route>
                <Route
                    exact
                    path="/winter/:year(\d+)"
                    render={(props) => <Winter {...props} currentSeason={currentSeason().name} season="WINTER" />}
                ></Route>
                <Route
                    exact
                    path="/spring/:year(\d+)"
                    render={(props) => <Spring {...props} currentSeason={currentSeason().name} season="SPRING" />}
                ></Route>
                <Route
                    exact
                    path="/summer/:year(\d+)"
                    render={(props) => <Summer {...props} currentSeason={currentSeason().name} season="SUMMER" />}
                ></Route>
                <Route
                    exact
                    path="/fall/:year(\d+)"
                    render={(props) => <Fall {...props} currentSeason={currentSeason().name} season="FALL" />}
                ></Route>
                <Route exact path="/archive" component={Archive} />
                <Route exact path="/tba" component={TBA} />
                <Route exact path="/airing" component={Airing} />
                <Route exact path="/search" component={Search} />
            </Switch>
        </Router>
    );
}

export default App;
