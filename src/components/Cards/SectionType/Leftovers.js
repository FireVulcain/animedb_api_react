import React, { Component } from "react";

/* Components */
import SkeletonLoader from "./../../Skeleton/Skeleton";
import Cards from "./../Cards";

export default class Leftovers extends Component {
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
                    media (season : $season, seasonYear: $seasonYear, isAdult: false, type: ANIME, format: $format, episodes_greater: 16) {
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
        let variables = {
            season: this.props.season,
            seasonYear: new Date().getFullYear(),
            page: 1,
            perPage: 50,
            format: "TV",
        };
        let url = "https://graphql.anilist.co";
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                query: query,
                variables: variables,
            }),
        };

        fetch(url, options)
            .then((response) => {
                return response.json().then(function (json) {
                    return response.ok ? json : Promise.reject(json);
                });
            })
            .then((data) => {
                let datas = data.data.Page.media;
                this.setState({ data: datas });
            })
            .catch((error) => {
                console.error(error);
            });
    };
    render() {
        return (
            <section>
                <h2 className="section-heading">Leftovers</h2>
                {!this.state.data.length > 0 ? <SkeletonLoader /> : <Cards data={this.state.data} type="leftovers" />}
            </section>
        );
    }
}
