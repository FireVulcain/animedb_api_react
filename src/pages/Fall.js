import React, { Component } from "react";
import TV from "../components/Cards/SectionType/TV";
import TVShort from "../components/Cards/SectionType/TVShort";
import Movie from "../components/Cards/SectionType/Movie";
import OVAONASpecial from "../components/Cards/SectionType/OVAONASpecial";
import Leftovers from "../components/Cards/SectionType/Leftovers";

export default class Fall extends Component {
    render() {
        const { currentSeason, season } = this.props;
        const { year } = this.props.match.params;
        return (
            <div className="main-content">
                <div>
                    <TV season={this.props.season} year={year} />
                    <TVShort season={this.props.season} year={year} />
                    {currentSeason === season ? <Leftovers season="SUMMER" /> : null}
                    <Movie season={this.props.season} year={year} />
                    <OVAONASpecial season={this.props.season} year={year} />
                </div>
            </div>
        );
    }
}
