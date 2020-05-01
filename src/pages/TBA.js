import React, { Component } from "react";

import TV from "../components/Cards/SectionType/TV";
import TVShort from "../components/Cards/SectionType/TVShort";
import Movie from "../components/Cards/SectionType/Movie";

import Head from "./../components/layouts/Head";

import Dropdown from "./../components/Cards/Dropdown";

export default class TBA extends Component {
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
        const description = "Find, track, and share TBA animes. Find the top-rated and most popular shows, OVAs, and movies!";
        return (
            <Head
                pageMeta={{
                    title: `AnimeDB: TBA Anime Chart`,
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
                        <TV status="NOT_YET_RELEASED" filter={filterName} />
                        <TVShort status="NOT_YET_RELEASED" filter={filterName} />
                        <Movie status="NOT_YET_RELEASED" filter={filterName} />
                    </div>
                </div>
            </Head>
        );
    }
}
