import React, { Component } from "react";
import { DebounceInput } from "react-debounce-input";

/* export */
import QUERY from "./../export/query";

/* components */
import SkeletonLoading from "./../components/Skeleton/SkeletonCards";
import Cards from "./../components/Cards/Cards";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    handleChange = (event) => {
        let value = event.target.value;
        if (value !== "") {
            this.fetchData(value);
        } else {
            this.setState({ data: [] });
        }
    };
    async fetchData(value) {
        let variables = {
            search: value,
            page: 1,
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
                let formatedTitleRomaji = e.title.romaji.toLowerCase().replace(/\W/g, " ");
                let formatedValue = value.toLowerCase().replace(/\W/g, " ");

                if (formatedTitleRomaji.includes(formatedValue)) {
                    return allData.push(e);
                } else if (e.title.english) {
                    let formatedTitleEnglish = e.title.english.toLowerCase().replace(/\W/g, " ");
                    if (formatedTitleEnglish.includes(formatedValue)) {
                        return allData.push(e);
                    }
                }
            });
            morePagesAvailable = data.Page.pageInfo.hasNextPage;
        }
        return this.setState({ data: allData });
    }
    render() {
        return (
            <div className="main-content">
                <div className="search">
                    <DebounceInput type="text" placeholder="Search Anime" minLength={2} debounceTimeout={1000} onChange={this.handleChange} />
                </div>
                <section>{this.state.data.length > 0 ? <Cards data={this.state.data} /> : <SkeletonLoading />}</section>
            </div>
        );
    }
}
