import React, { Component } from "react";

import TV from "../components/Cards/SectionType/TV";
import TVShort from "../components/Cards/SectionType/TVShort";
import Movie from "../components/Cards/SectionType/Movie";

import Head from "./../components/layouts/Head";

export default class TBA extends Component {
    render() {
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
                        <TV status="NOT_YET_RELEASED" />
                        <TVShort status="NOT_YET_RELEASED" />
                        <Movie status="NOT_YET_RELEASED" />
                    </div>
                </div>
            </Head>
        );
    }
}
