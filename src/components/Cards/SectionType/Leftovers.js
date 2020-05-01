import React, { Component } from "react";

/* Components */
import SkeletonLoader from "./../../Skeleton/SkeletonCards";
import Cards from "./../Cards";

/* Query */
import QUERY from "./../../../export/query";

/* helpers */
import { sortByPopularity } from "./../../../helpers/helpers";

export default class Leftovers extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount = () => {
        this._isMounted = true;
        this.fetchData();
    };
    componentWillUnmount() {
        this._isMounted = false;
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.year !== this.props.year) {
            this.setState({ data: [] });
            this.fetchData();
        }
    };
    async fetchData() {
        let variables = {
            season: this.props.season,
            seasonYear: this.props.year,
            page: 1,
            episodesGreater: 16,
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
                    query: QUERY,
                    variables: variables,
                }),
            };

            const response = await fetch(window.$url, options);
            let { data } = await response.json();
            data.Page.media.forEach((e) => {
                if (e.status !== "FINISHED") {
                    return allData.push(e);
                }
            });
            morePagesAvailable = data.Page.pageInfo.hasNextPage;
        }
        if (this._isMounted) {
            return this.setState({ data: sortByPopularity(allData) });
        } else {
            return false;
        }
    }
    render() {
        const { season } = this.props;
        return (
            <section>
                <h2 className="section-heading">Leftovers</h2>
                {!this.state.data.length > 0 ? <SkeletonLoader /> : <Cards data={this.state.data} type="leftovers" season={season} />}
            </section>
        );
    }
}
