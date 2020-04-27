import React, { Component } from "react";
import TV from "../components/Home/section/TV";
import TVShort from "../components/Home/section/TVShort";
import Movie from "../components/Home/section/Movie";
import OVAONASpecial from "../components/Home/section/OVAONASpecial";

export default class Summer extends Component {
    render() {
        return (
            <div className="main-content">
                <TV season={this.props.season} />
                <TVShort season={this.props.season} />
                <Movie season={this.props.season} />
                <OVAONASpecial season={this.props.season} />
            </div>
        );
    }
}
