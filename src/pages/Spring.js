import React, { Component } from "react";
import TV from "../components/Cards/SectionType/TV";
import TVShort from "../components/Cards/SectionType/TVShort";
import Movie from "../components/Cards/SectionType/Movie";
import OVAONASpecial from "../components/Cards/SectionType/OVAONASpecial";

export default class Spring extends Component {
    render() {
        return (
            <div className="main-content">
                <div>
                    <TV season={this.props.season} />
                    <TVShort season={this.props.season} />
                    <Movie season={this.props.season} />
                    <OVAONASpecial season={this.props.season} />
                </div>
            </div>
        );
    }
}
