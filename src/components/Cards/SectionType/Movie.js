import React, { Component } from "react";

/* Components */
import SkeletonLoader from "./../../Skeleton/SkeletonCards";
import Cards from "./../Cards";

/* Query */
import QUERY from "./../../../export/query";

/* helpers */
import { sortByPopularity } from "./../../../helpers/helpers";

export default class Movie extends Component {
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
            season: this.props.season ? this.props.season : null,
            page: 1,
            perPage: 50,
            format: "MOVIE",
        };
        if (this.props.year) {
            variables.seasonYear = this.props.year;
        }
        if (this.props.status) {
            variables.status = this.props.status;
        }

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
            data.Page.media.forEach((e) => allData.push(e));
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
                <h2 className="section-heading">Movie</h2>
                {!this.state.data.length > 0 ? <SkeletonLoader /> : <Cards data={this.state.data} type="movie" season={season} />}
            </section>
        );
    }
}
