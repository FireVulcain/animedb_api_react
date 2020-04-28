import React, { Component } from "react";

/* Components */
import SkeletonLoader from "./../Skeleton/Skeleton";
import Cards from "./../Cards/Cards";

export default class Movie extends Component {
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
    async fetchData() {
        let query = `
            query ($page: Int, $perPage: Int, $seasonYear: Int, $season: MediaSeason, $format: MediaFormat, $status : MediaStatus) {
                Page (page: $page, perPage: $perPage) {
                    pageInfo {
                        total
                        currentPage
                        lastPage
                        hasNextPage
                        perPage
                    }
                    media (season : $season, seasonYear: $seasonYear, isAdult: false, type: ANIME, format: $format, status: $status) {
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
            season: this.props.season ? this.props.season : null,
            page: 1,
            perPage: 50,
            format: "MOVIE",
            status: this.props.status,
        };

        let url = "https://graphql.anilist.co";

        let allData = [];
        let morePagesAvailable = true;
        let currentPage = 0;

        while (morePagesAvailable) {
            currentPage++;
            variables.page = currentPage;
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

            const response = await fetch(url, options);
            let { data } = await response.json();
            data.Page.media.forEach((e) => allData.push(e));
            morePagesAvailable = data.Page.pageInfo.hasNextPage;
        }
        return this.setState({ data: allData });
    }

    render() {
        return (
            <section>
                <h2 className="section-heading">Movie</h2>
                {!this.state.data.length > 0 ? <SkeletonLoader /> : <Cards data={this.state.data} type="movie" />}
            </section>
        );
    }
}