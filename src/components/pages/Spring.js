import React, { Component } from "react";

/* Components */
import { TV, TVShort, Movie, OVAONASpecial, Leftovers, Dropdown, Head } from "./../";

export default class Spring extends Component {
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
        const description = `Find, track, and share what's airing during the Spring ${year} anime season. Find the top-rated and most popular shows, OVAs, and movies!`;

        return (
            <Head
                pageMeta={{
                    title: `AnimeDB: Spring ${year} Seasonal Chart`,
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
                        {currentSeason === season ? <Leftovers season="WINTER" year={year} filter={filterName} /> : null}
                        <Movie season={this.props.season} year={year} filter={filterName} />
                        <OVAONASpecial season={this.props.season} year={year} filter={filterName} />
                    </div>
                </div>
            </Head>
        );
    }
}
