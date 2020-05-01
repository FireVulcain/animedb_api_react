import React, { Component } from "react";

export default class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
        };
    }
    showMenu = () => {
        this.setState({ showMenu: true }, () => {
            document.addEventListener("click", this.closeMenu);
        });
    };
    closeMenu = () => {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener("click", this.closeMenu);
        });
    };

    handleFilter = (index, filterName) => {
        this.props.onChange(index, filterName);
    };

    render() {
        const { activeId } = this.props;
        let filterItem = [
            { name: "Title", filterName: "title" },
            { name: "Next Airing Episode", filterName: "nextAiring" },
            { name: "Popularity", filterName: "popularity" },
            { name: "Score", filterName: "score" },
            { name: "Start Date", filterName: "startDate" },
            { name: "End Date", filterName: "endDate" },
        ];
        const items = [];

        for (const [index, value] of filterItem.entries()) {
            items.push(
                <div
                    key={index}
                    className={"item" + (activeId === index ? " active" : "")}
                    onClick={() => this.handleFilter(index, value.filterName)}
                >
                    {value.name}
                </div>
            );
        }

        return (
            <div>
                <div className="filters">
                    <div className="tooltip" onClick={this.showMenu}>
                        <svg viewBox="0 0 12 19" style={{ height: "24px" }}>
                            <g clipPath="url(#clip0)">
                                <path
                                    fill="currentColor"
                                    stroke="none"
                                    pid="0"
                                    d="M9.69 10.688H1.714c-1.518 0-2.287 1.918-1.208 3.039l3.987 4.156c.666.694 1.749.694 2.419 0l3.99-4.156c1.068-1.117.31-3.04-1.212-3.04zM5.7 16.625l-3.99-4.156h7.98L5.7 16.625zM1.71 8.312h7.977c1.517 0 2.287-1.918 1.207-3.039L6.908 1.117a1.666 1.666 0 0 0-2.419 0L.499 5.273C-.57 6.39.189 8.313 1.71 8.313zM5.7 2.375l3.99 4.156H1.71L5.7 2.375z"
                                    _fill="#777A9E"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <path fill="currentColor" stroke="none" pid="1" _fill="#fff" d="M0 0h11.4v19H0z"></path>
                                </clipPath>
                            </defs>
                        </svg>
                        <span className="tooltip-text">Sort</span>
                    </div>
                    {this.state.showMenu ? <div className="dropdown-menu sort">{items}</div> : null}
                </div>
            </div>
        );
    }
}
