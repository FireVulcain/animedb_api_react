import React, { Component } from "react";
import TV from "../components/Cards/SectionType/TV";
import TVShort from "../components/Cards/SectionType/TVShort";
import Movie from "../components/Cards/SectionType/Movie";
import OVAONASpecial from "../components/Cards/SectionType/OVAONASpecial";
import Leftovers from "../components/Cards/SectionType/Leftovers";

export default class Summer extends Component {
    render() {
        const { currentSeason, season } = this.props;
        return (
            <div className="main-content">
                <div>
                    <TV season={this.props.season} />
                    <TVShort season={this.props.season} />
                    {currentSeason === season ? <Leftovers season="SPRING" /> : null}
                    <Movie season={this.props.season} />
                    <OVAONASpecial season={this.props.season} />
                </div>
            </div>
        );
    }
}
