import React, { Component } from "react";
import { getCurrentWeek } from "./../../helpers/helpers";

/* Components */
import { SkeletonAiring, Calendar, Head } from "./../";

export default class Airing extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            getAiringNext: true,
        };
    }
    componentDidMount = () => {
        this._isMounted = true;
        this.fetchData();
    };
    componentWillUnmount() {
        this._isMounted = false;
    }
    async fetchData() {
        let query = `
            query ( $weekStart: Int, $weekEnd: Int, $page: Int ) {
                Page(page: $page) {
                    pageInfo {
                        hasNextPage 
                        total
                    }
                    airingSchedules( airingAt_greater: $weekStart airingAt_lesser: $weekEnd) {
                        id 
                        episode 
                        airingAt
                        media {
                            isAdult
                            id 
                            duration
                            title {
                                romaji
                            }
                            coverImage {
                                extraLarge color
                            }
                        }
                    }
                }
            }
            `;
        let variables = {
            page: 1,
            weekEnd: getCurrentWeek().weekEnd,
            weekStart: getCurrentWeek().weekStart,
        };

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

            const response = await fetch(window.$url, options);
            let { data } = await response.json();
            data.Page.airingSchedules.forEach((e) => {
                if (!e.media.isAdult) {
                    allData.push(e);
                }
            });
            morePagesAvailable = data.Page.pageInfo.hasNextPage;
        }
        if (this._isMounted) {
            return this.setState({ data: allData });
        } else {
            return false;
        }
    }

    render() {
        const description =
            "Keep track of the airing dates and times of all the anime you're following with the AniChart airing anime calendar. Know exactly when an episode airs!";
        return (
            <Head
                pageMeta={{
                    title: `AnimeDB: Airing Anime Calendar`,
                    description: description,
                }}
            >
                <div className="main-content">
                    <div className="airing-view">{!this.state.data.length > 0 ? <SkeletonAiring /> : <Calendar data={this.state.data} />}</div>
                </div>
            </Head>
        );
    }
}
