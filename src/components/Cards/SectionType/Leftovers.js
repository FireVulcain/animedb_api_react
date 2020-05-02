import React, { Component } from "react";

/* Components */
import { Cards, SkeletonCards } from "./../../";

/* Query */
import QUERY from "./../../../export/query";

/* helpers */
import { sortBy } from "./../../../helpers/helpers";

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
        if (prevProps.filter !== this.props.filter) {
            this.setState({ data: sortBy(this.state.data, this.props.filter) });
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
            return this.setState({ data: sortBy(allData) });
        } else {
            return false;
        }
    }
    render() {
        return (
            <section>
                <h2 className="section-heading">Leftovers</h2>
                {!this.state.data.length > 0 ? <SkeletonCards /> : <Cards data={this.state.data} type="leftovers" />}
            </section>
        );
    }
}
