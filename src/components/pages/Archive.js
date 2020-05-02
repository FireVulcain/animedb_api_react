import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import exports from "./../../export/exports";

import { Head } from "./..";

export default class Archive extends Component {
    componentDidMount = () => {
        this.clearHeader();
    };
    clearHeader = () => {
        let el = document.querySelectorAll(".banner-image");
        el.forEach((e) => {
            e.parentNode.removeChild(e);
        });
    };
    render() {
        const description =
            "Take a look at past seasonal anime shows and movies in the AnimeDB archives. Find out what were the most popular and top-rated anime of each season.";
        return (
            <Head
                pageMeta={{
                    title: `AnimeDB: Seasonal Anime Archive`,
                    description: description,
                }}
            >
                <div className="main-content">
                    <div className="archive-view">
                        {exports.map((item, key) => {
                            return (
                                <section className="year" key={key}>
                                    <h2>{item.year}</h2>
                                    <div className="seasons">
                                        {item.seasons.map((season, i) => {
                                            return (
                                                <NavLink key={i} to={`/${season.season}/${item.year}`} className="season" activeClassName="active">
                                                    <img src={season.image} alt="Main Anime preview" className="season-image" />
                                                    <div className="name">{season.season}</div>
                                                    <div className="total">{season.total} Anime</div>
                                                </NavLink>
                                            );
                                        })}
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </div>
            </Head>
        );
    }
}
