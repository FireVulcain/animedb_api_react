import React, { Component } from "react";

/* Components */
import SkeletonLoader from "./../../Skeleton/Skeleton";
import Cards from "./../Cards";

export default class TV extends Component {
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
                        bannerImage
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
            seasonYear: this.props.year,
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
                this.setState({ data: datas }, () => {
                    this.populateHeader();
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };
    populateHeader = () => {
        this.state.data.map((element) => {
            if (element.bannerImage) {
                var el = document.getElementById("navbar");
                var elChild = document.createElement("div");
                elChild.setAttribute("id", element.id);
                elChild.setAttribute("class", "banner-image");
                elChild.setAttribute("style", `background-image: url("${element.bannerImage}");`);
                el.appendChild(elChild);
            }
            return false;
        });
    };
    render() {
        return (
            <section>
                <h2 className="section-heading">TV</h2>
                {!this.state.data.length > 0 ? <SkeletonLoader /> : <Cards data={this.state.data} type="tv" />}
            </section>
        );
    }
}
