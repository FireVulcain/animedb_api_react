import React, { Component } from "react";

import TV from "../components/Cards/SectionType/TV";
import TVShort from "../components/Cards/SectionType/TVShort";
import Movie from "../components/Cards/SectionType/Movie";

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
