import React, { Component } from "react";

import TV from "../components/TBA/TV";
import TVShort from "../components/TBA/TVShort";
import Movie from "../components/TBA/Movie";

export default class TBA extends Component {
    render() {
        return (
            <div className="main-content">
                <div>
                    <TV status="NOT_YET_RELEASED" />
                    <TVShort status="NOT_YET_RELEASED" />
                    <Movie status="NOT_YET_RELEASED" />
                </div>
            </div>
        );
    }
}
