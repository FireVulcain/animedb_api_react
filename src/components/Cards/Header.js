import React, { Component } from "react";

import { diffBetweenDates, firstAiringDate, airingIn, averageScore } from "./../../helpers/helpers";

class Header extends Component {
    render() {
        const { element, index } = this.props;
        return (
            <div className="header">
                <div>
                    {element.nextAiringEpisode ? (
                        <div>
                            <div className="episode">{airingIn(element.airingSchedule, element.episodes)}</div>
                            <div className="countdown">
                                {diffBetweenDates(new Date(element.nextAiringEpisode.airingAt * 1000), new Date(), element.startDate)}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="episode">{element.episodes ? `${element.episodes} Episodes aired on` : "Aired on"}</div>
                            <div className="countdown">{firstAiringDate(element.startDate)}</div>
                        </div>
                    )}

                    <div>{element.source ? <div className="source">Source • {element.source.toLowerCase().replace("_", " ")}</div> : null}</div>
                </div>
                <div className="icon-stats">
                    {element.averageScore ? (
                        <div className="icon-stat">
                            {averageScore(element.averageScore)}
                            <span className="stat">{element.averageScore}%</span>
                        </div>
                    ) : null}
                    <div className="icon-stat">
                        <svg version="1.1" viewBox="0 0 18 18" className="svg-icon">
                            <path
                                stroke="rgb(var(--color-red))"
                                fill="none"
                                pid="0"
                                d="M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 1 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835v0z"
                                _stroke="#EF5C5C"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        <span className="stat">#{index + 1}</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;
