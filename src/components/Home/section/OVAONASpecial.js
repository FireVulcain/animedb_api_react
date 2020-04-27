import React, { Component } from "react";

import Header from "../Header";
import ExternalLinks from "../ExternalLinks";

import SkeletonLoader from "./../../Skeleton/Skeleton";

export default class OVAONASpecial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount = () => {
        let query = `
            query ($page: Int, $perPage: Int, $seasonYear: Int, $season: MediaSeason, $format: MediaFormat) {
                Page (page: $page, perPage: $perPage) {
                    pageInfo {
                        total
                        currentPage
                        lastPage
                        hasNextPage
                        perPage
                    }
                    media (season : $season, seasonYear: $seasonYear, isAdult: false, type: ANIME, format: $format) {
                        id
                        source
                        popularity
                        title {
                            romaji
                        }
                        coverImage {
                            large
                        }
                        description
                        genres
                        nextAiringEpisode{
                            airingAt
                        }
                        episodes
                        startDate{
                            year
                            month
                            day
                        }
                        airingSchedule {
                            edges {
                                node{
                                    timeUntilAiring
                                }
                            }
                          }
                        averageScore
                        trailer{
                            id
                            thumbnail
                            site
                        }
                        hashtag
                        externalLinks{
                            url
                            site
                        }
                    }
                }
                
            }
            `;
        let variables = [
            {
                season: this.props.season,
                seasonYear: new Date().getFullYear(),
                page: 1,
                perPage: 50,
                format: "OVA",
            },
            {
                season: this.props.season,
                seasonYear: new Date().getFullYear(),
                page: 1,
                perPage: 50,
                format: "ONA",
            },
            {
                season: this.props.season,
                seasonYear: new Date().getFullYear(),
                page: 1,
                perPage: 50,
                format: "SPECIAL",
            },
        ];
        variables.map((variable) => {
            let url = "https://graphql.anilist.co";
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    query: query,
                    variables: variable,
                }),
            };

            return fetch(url, options)
                .then((response) => {
                    return response.json().then(function (json) {
                        return response.ok ? json : Promise.reject(json);
                    });
                })
                .then((data) => {
                    // console.log(data.data.Page.media);
                    let datas = data.data.Page.media;
                    this.setState((prevState) => ({
                        data: prevState.data.concat(datas),
                    }));
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    };
    render() {
        return (
            <section>
                <h2 className="section-heading">OVA / ONA / Special</h2>
                {!this.state.data.length > 0 ? (
                    <SkeletonLoader />
                ) : (
                    <div id="anime">
                        {this.state.data
                            .sort((a, b) => (a.popularity > b.popularity ? -1 : 1))
                            .map((element, key) => {
                                return (
                                    <div className="container" key={key}>
                                        <a href={`anime/${element.id}`}>
                                            <img src={element.coverImage.large} alt={element.title.romaji} />
                                            <div className="overlay">
                                                <p>{element.title.romaji}</p>
                                            </div>
                                        </a>
                                        <div className="data">
                                            <div className="scroller">
                                                <div className="scroller-wrap">
                                                    <div className="body">
                                                        <Header element={element} index={key} />
                                                        <ExternalLinks element={element} />
                                                        <div className="description-wrap">
                                                            <span
                                                                className="description"
                                                                dangerouslySetInnerHTML={{
                                                                    __html: element.description,
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="footer">
                                                <div className="genres">
                                                    {element.genres.map((genre, key) => {
                                                        return (
                                                            <div className="genre" key={key}>
                                                                {genre}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                )}
            </section>
        );
    }
}
