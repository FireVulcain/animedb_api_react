import React, { Component } from "react";

/* Components */
import TV from "../components/Cards/SectionType/TV";
import TVShort from "../components/Cards/SectionType/TVShort";
import Movie from "../components/Cards/SectionType/Movie";
import OVAONASpecial from "../components/Cards/SectionType/OVAONASpecial";
import Leftovers from "../components/Cards/SectionType/Leftovers";

import Head from "./../components/layouts/Head";

export default class Fall extends Component {
    render() {
        const { currentSeason, season } = this.props;
        const { year } = this.props.match.params;
        let description = `Find, track, and share what's airing during the Fall ${year} anime season. Find the top-rated and most popular shows, OVAs, and movies!`;
        return (
            <Head
                pageMeta={{
                    title: `AnimeDB: Fall ${year} Seasonal Chart`,
                    description: description,
                }}
            >
                <div className="main-content">
                    <div>
                        <TV season={this.props.season} year={year} />
                        <TVShort season={this.props.season} year={year} />
                        {currentSeason === season ? <Leftovers season="SUMMER" year={year} /> : null}
                        <Movie season={this.props.season} year={year} />
                        <OVAONASpecial season={this.props.season} year={year} />
                    </div>
                </div>
            </Head>
        );
    }
}
