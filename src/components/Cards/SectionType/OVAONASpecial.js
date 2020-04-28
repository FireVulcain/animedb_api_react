import React, { Component } from "react";

/* Components */
import SkeletonLoader from "./../../Skeleton/Skeleton";
import Cards from "./../Cards";

export default class OVAONASpecial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount = () => {
        this.fetchData();
    };
    componentDidUpdate = (prevProps) => {
        if (prevProps.year !== this.props.year) {
            this.setState({ data: [] });
            this.fetchData();
        }
    };
    fetchData = () => {
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
                        airingSchedule( notYetAired: true perPage: 2) {
                            nodes {
                                episode airingAt
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
                        studios(isMain: true) {
                            nodes {
                                id name siteUrl
                            }
                        }
                    }
                }
                
            }
            `;
        let variables = [
            {
                season: this.props.season,
                seasonYear: this.props.year,
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
                {!this.state.data.length > 0 ? <SkeletonLoader /> : <Cards data={this.state.data} type="ovaOnaSpecial" />}
            </section>
        );
    }
}
