import React, { Component } from "react";

/* Components */
import TV from "../components/Cards/SectionType/TV";
import TVShort from "../components/Cards/SectionType/TVShort";
import Movie from "../components/Cards/SectionType/Movie";
import OVAONASpecial from "../components/Cards/SectionType/OVAONASpecial";
import Leftovers from "../components/Cards/SectionType/Leftovers";
import Dropdown from "./../components/Cards/Dropdown";

import Head from "./../components/layouts/Head";

export default class Fall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeId: 2,
            filterName: "popularity",
        };
    }
    handleFilterChange = (index, filterName) => {
        this.setState({ activeId: index, filterName: filterName });
    };
    render() {
        const { activeId, filterName } = this.state;
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
                        <div className="section-heading">
                            <h2>TV</h2>
                            <div className="empty"></div>
                            <Dropdown onChange={this.handleFilterChange} activeId={activeId} />
                        </div>
                        <TV season={this.props.season} year={year} filter={filterName} />
                        <TVShort season={this.props.season} year={year} filter={filterName} />
                        {currentSeason === season ? <Leftovers season="SUMMER" year={year} filter={filterName} /> : null}
                        <Movie season={this.props.season} year={year} filter={filterName} />
                        <OVAONASpecial season={this.props.season} year={year} filter={filterName} />
                    </div>
                </div>
            </Head>
        );
    }
}
